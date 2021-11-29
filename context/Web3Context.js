import React, { useState, createContext, useEffect } from "react";

import Web3Modal from "web3modal";
import Web3 from "web3";
import axios from "axios";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
// import User from "../artifacts/contracts/UserProfile.sol/UserProfile.json";
import { ethers } from "ethers";
import {
  nftaddress,
  nftmarketaddress,
  useraddresss,
  userTokenAddress,
} from "../config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import {
  getStorage,
  where,
  query,
  doc,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db, auth, storage } from "../firebase/clientApp";
export const Web3Context = createContext(undefined);

export const Web3ContextProvider = (props) => {
  const [nfts, setNfts] = useState([]);
  const [myNfts, setMyNfts] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [myNftLoadingState, setMyNftLoadingState] = useState(false);
  const [currentAddress, setCurrentAddress] = useState("");
  const [userData, setUserData] = useState([]);
  const [firebaseData, setfirebaseData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let web3 = new Web3();
    firebase();
    let address = localStorage.getItem("account");

    setCurrentAddress(address);
    // window.ethereum.enable().then(function (accounts) {
    //   setCurrentAddress(web3.utils.toChecksumAddress(accounts[0]));
    //   firebase();
    // });

    window.ethereum.on("accountsChanged", function (accounts) {
      if (accounts.length > 0) setCurrentAddress(accounts[0]);
      else {
        setCurrentAddress("");
        localStorage.setItem("account", null);
      }

      loadMyNfts();
      // getUserFirebaseData();
      // getUserFirebaseData(db);
    });
  });

  async function getUserFirebaseData() {
    let datad = [];
    const userData = collection(db, "Nft-Marketplace");
    const userSnapshot = await getDocs(userData);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    console.log(userList, "user userList");
    setUserData(userList);
    userList.forEach((e) => {
      if (e.WalletAddress == currentAddress) {
        console.log(e, "user data");
        console.log(e.Name);
        console.log(e.Bio);
        console.log(e.WalletAddress);
        console.log(e.Image);
        console.log(e.email);

        datad.push(e);
        console.log(userData, "userrrrrrr");
      } else {
        console.log("No data found");
      }
    });
  }

  async function connectWallet() {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function (accounts) {
          setCurrentAddress(accounts[0]);
          localStorage.setItem("account", accounts[0]);

          window.ethereum.on("accountsChanged", function (accounts) {
            setCurrentAddress(accounts[0]);
            localStorage.setItem("account", accounts[0]);
          });
        });
      } catch (e) {
        alert("User rejected the MetaMask connection request !");
      }
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      alert("You have to install MetaMask !");
    }
  }

  async function firebase() {
    // const firebaseConfig = {
    //   apiKey: "AIzaSyB_DOoIFW1oYAv48p_2rMYn6jl3qEVj_xU",
    //   authDomain: "nft-hunt-a1b0c.firebaseapp.com",
    //   projectId: "nft-hunt-a1b0c",
    //   storageBucket: "nft-hunt-a1b0c.appspot.com",
    //   messagingSenderId: "871660143302",
    //   appId: "1:871660143302:web:6f49227bc7801fbaab8dc7",
    //   measurementId: "G-B99MRR6XBV"
    // };
    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    // setfirebaseData(app);
    // console.log(app, "firebase");
  }
  // async function userProfiles(name, bio, email, fileUrl) {
  //   let web3 = new Web3();
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner()
  //   const userContract = new ethers.Contract(useraddresss, User.abi, signer);
  //   console.log(userContract, "u");
  //   const data = await userContract.createUser(currentAddress, name, bio, email, fileUrl);

  // }

  // async function getUserData() {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner()
  //   const userContract = new ethers.Contract(useraddresss, User.abi, signer);
  //   const data = await userContract.getUser(currentAddress);
  //   console.log(data, "user data");
  //   setUserData(data);
  // }
  async function loadNFTs() {
    setLoadingState(false);
    let web3 = new Web3();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const data = await marketContract.fetchMarketItems();
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = web3.utils.fromWei(i.price.toString(), "ether");

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          name: meta.data.name,
          description: meta.data.description,
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState(true);
  }

  async function loadMyNfts() {
    let web3 = new Web3();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const data = await marketContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = web3.utils.fromWei(i.price.toString(), "ether");
        let item = {
          price,
          name: meta.data.name,
          tokenId: i.tokenId.toNumber(),
          description: meta.data.description,
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        };
        return item;
      })
    );
    setMyNfts(items);
    setMyNftLoadingState(true);
  }

  async function buyNft(nft) {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        nftmarketaddress,
        Market.abi,
        signer
      );

      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(
        nftaddress,
        nft.tokenId,
        {
          value: price,
        }
      );

      await transaction.wait();
      loadNFTs();
      loadMyNfts();
      setLoader(false);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <Web3Context.Provider
      value={{
        loadNFTs,
        buyNft,
        nfts,
        loader,
        loadingState,
        myNfts,
        myNftLoadingState,
        loadMyNfts,
        currentAddress,
        // userProfiles,
        userData,
        getUserFirebaseData,
        // getUserData,
        connectWallet,
        firebaseData,
      }}
      {...props}
    >
      {props.children}
    </Web3Context.Provider>
  );
};
