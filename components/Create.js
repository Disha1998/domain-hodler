import React, { useState } from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import web3 from 'web3'

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function Create() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()
  const [loader, setLoader] = useState(false)

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createItem() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl 
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createSale(url) {
    setLoader(true)
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()
    const price = web3.utils.toWei(formInput.price, 'ether')
  
    const listingPrice = web3.utils.toWei('0.1', 'ether')

    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    
    await transaction.wait()
    setLoader(false)
    router.push('/explore')
  }

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error);
    }  
  }

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      {}
      <section
        id="subheader"
        className="text-light bg-container" 
      >
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Create</h1>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </section>
      {}
      {}
      <section aria-label="section">
        <div className="container">
          <div className="row wow fadeIn">
            <div className="col-lg-7 offset-lg-1">
              <form
                id="form-create-item"
                className="form-border"
                method="post"
                action="email.php"
              >
                <div className="field-set">
                  <h5>Upload file</h5>
                  <div className="d-create-file">
                    <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                    <label
                      htmlFor="files"
                      id="get_file"
                      name="Asset"
                      className="btn-main"
                      style={{color:"white"}}
                    >
                     Browse
                    </label>
                    <input id="files" onChange={onChange} style={{display:"none"}} type="file" />

                  </div>
                  <div className="spacer-single" />
                  <h5>Title</h5>
                  <input
                    type="text"
                    name="item_title"
                    id="item_title"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                    className="form-control"
                    placeholder="e.g. 'Crypto Funk"
                  />
                  <div className="spacer-10" />
                  <h5>Description</h5>
                  <textarea
                    data-autoresize
                    name="item_desc"
                    id="item_desc"
                    onChange={(e) =>
                      updateFormInput({
                        ...formInput,
                        description: e.target.value,
                      })
                    }
                    className="form-control"
                    placeholder="e.g. 'This is very limited item'"
                    defaultValue={""}
                  />
                  <div className="spacer-10" />
                  <h5>Price</h5>
                  <input
                    type="text"
                    name="item_price"
                    id="item_price"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, price: e.target.value })
                    }
                    className="form-control"
                    placeholder="enter price for one item (ETH)"
                  />
                  <div className="spacer-10" />
                  <h5>Royalties</h5>
                  <input
                    type="text"
                    name="item_royalties"
                    id="item_royalties"
                    className="form-control"
                    placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%"
                  />
                  <div className="spacer-10" />
                  <input
                    type="button"
                    id="submit"
                    className="btn-main"
                    defaultValue={loader == true ? "Loading...! Please wait it will take time" : "Create Item"}
                    onClick={createItem} 
                    disabled={loader ? true : false}
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <h5>Preview item</h5>
              <div className="nft__item">
                <div className="author_list_pp">
                  <a href="#">
                    <img className="lazy" src="/img/author/author-1.jpg" alt />
                    <i className="fa fa-check" />
                  </a>
                </div>
                <div className="nft__item_wrap">
                  <a href="#">
                    {fileUrl ? (
                      <img
                        id="get_file_2"
                        className="lazy nft__item_preview"
                        alt
                        src={fileUrl}
                      />
                    ) : (
                      <img
                        src="/img/collections/coll-item-3.jpg"
                        id="get_file_2"
                        className="lazy nft__item_preview"
                        alt="image"
                      />
                    )}
                  </a>
                </div>
                <div className="nft__item_info">
                  <a href="#">
                    <h4>{formInput.name == "" ? "Pinky Ocean" : formInput.name}</h4>
                  </a>
                  <div className="nft__item_price">
                    {formInput.price == "" ? "0.00" : formInput.price} ETH<span>1/20</span>
                  </div>
                  <div className="nft__item_action">
                    <a href="#">Place a bid</a>
                  </div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"> 
                    </i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Create;
