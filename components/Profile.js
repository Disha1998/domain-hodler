import React, { useEffect, useState } from "react";

import {
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Web3Context } from "../context/Web3Context";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { db, auth, storage } from "../firebase/clientApp";

import web3 from 'web3'

import { Avatar, Fab } from '@material-ui/core';
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { getStorage, where, query, doc, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");


function Profile() {
  const web3Context = React.useContext(Web3Context);
  const { currentAddress, userProfiles, userData, getUserData, firebaseData, getUserFirebaseData } = web3Context;
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ name: 'Monica Lucas', bio: '',Username: '@monicalucas'});

  const [userProfileData, setUserProfileData] = useState({ bio: '', name: '', email: '', initial: '' })

  useEffect(() => {
    getUserFirebaseData(); 
  })

  const metadata = {
    contentType: 'image/jpeg',
  };


  async function onChange(e) {
    // const file = e.target.files[0]
    // const imageRef = ref(storage, '/NFT-Hunt' + file.name);
    // uploadBytesResumable(imageRef, file, metadata)
    //   .then((snapshot) => { 
    //     // Let's get a download URL for the file.
    //     getDownloadURL(snapshot.ref).then((url) => { 
    //       setFileUrl(url)
    //       // ...
    //     });
    //   }).catch((error) => {
    //     console.error('Upload failed', error);
    //     // ...
    //   });
  }

  async function submitProfile() {
    const { name, bio, email } = formInput
    console.log(name, bio, email);
    if (currentAddress != "") {
      const docRef = await addDoc(collection(db, 'Nft-Marketplace'), {
        Bio: bio,
        Name: name,
        Username: username,
        Initials: name[0],
        WalletAddress: currentAddress,
        createdAt: Timestamp.fromDate(new Date()).toDate(),
      });
    } else {
      alert("please connect wallet!!")
    }


    try {
      // const added = await client.add(data) 
      // var buffer = Buffer.from(added.path);
      // var ipfsHash = buffer.toString('utf8'); 
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      // console.log(url,"url from user");
      // userProfiles(name,bio,fileUrl,email); 
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function createProfile(url) {
    console.log("url ipfs", url);
  }

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      { }
      <section
        id="subheader"
        className="text-light bg-container"

      >
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Edit profile</h1>
                <p>
                  You can set preferred display name, create your branded
                  profile URL and manage other personal settings
                </p>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </section>
      { }
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              {/* <button className="btn btn-primary" onClick={getUserData}>get user data</button> */}
              <form
                name="userProfile"
                id="userProfile"
                className="form-border"

              >
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <Fab size="small" color="secondary" className="ml-3 font-weight-bold">
                      {userData != null ? userData.Initials : 'M'}
                    </Fab>
                    {/* <img
                      src={fileUrl !== null ? fileUrl : "/img/author_single/author_thumbnail.jpg"}
                      alt="image"
                    /> */}
                    {/* <i className="fa fa-check"></i> */}
                    <div className="profile_name">
                      <h4>
                        {formInput.name}
                        <span className="profile_username"> {` ${formInput.name !== " " ? "@" + formInput.name.toLocaleLowerCase().split(' ').join('') : "@monica"}`}</span>
                        <span id="wallet" className="profile_wallet">
                          {userData != null ? userData.WalletAddress : currentAddress}
                        </span>
                        <button type="button" id="btn_copy" title="Copy Text">
                          Copy
                        </button>
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <div className="field-set">
                  {/* <h5>Upload Profile</h5>
                  <div className="d-create-file">
                    <p id="file_name">PNG, JPG</p>
                    <label
                      htmlFor="files"
                      id="get_file"
                      name="Asset"
                      className="btn-main"
                      style={{ color: "white" }}
                    >
                      Browse
                    </label>
                    <input id="files" onChange={onChange} style={{ display: "none" }} type="file" />

                  </div> */}
                  <label>Display name</label>
                  <input
                    type="text"
                    name="dname"
                    id="dname"
                    className="form-control"
                    defaultValue={userData != null ? userData.Name : ''}
                    placeholder="Enter your display name"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                </div>
                <div className="field-set">
                  <label>User Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    defaultValue={userData != null ? userData.Username : ''}
                    placeholder="Enter Your Username"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, Username: e.target.value })
                    }
                  />
                </div>
                <div className="field-set">
                  <label>Bio</label>
                  <input
                    type="text"
                    name="bio"
                    id="bio"
                    className="form-control"
                    defaultValue={userData != null ? userData.Bio : ''}
                    placeholder="Tell about yourself in few words"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, bio: e.target.value })
                    }
                  />
                </div>
                {/* <div className="field-set">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={userData != null ? userData.Email : ' '}
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, email: e.target.value })
                    }
                  />
                </div> */}
                <div id="submit">
                  <input
                    type="button"
                    defaultValue="Update Profile"
                    className="btn btn-main color-2"
                    onClick={submitProfile}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Profile;
