import axios from "axios";
import React, { useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";

function MyItems() {
  const web3Context = React.useContext(Web3Context);
  const { myNfts, myNftLoadingState, loadMyNfts, currentAddress ,userData, getUserData} = web3Context;
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    loadMyNfts();
    // getUserData();
  }, [currentAddress,]); 
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      {}
      <section
        id="profile_banner"
        aria-label="section"
        className="text-light bg-container"
      ></section>
      {}
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex">
                <div className="de-flex-col">
                {/* {
                     userData.name != "" ? <div className="profile_avatar">
                     <img src={userData.email} alt />
                     <i className="fa fa-check" />
                     <div className="profile_name">
                       <h4>
                          {userData.name}
                         <span className="profile_username">{userData.userImage}</span>
                         <span id="wallet" className="profile_wallet">
                           {userData.userAddress}
                         </span>
                         <button type="button" id="btn_copy" title="Copy Text">
                           Copy
                         </button>
                       </h4>
                     </div>
                   </div> : */}
                  <div className="profile_avatar">
                        <img src="/img/author/author-1.jpg" alt />
                        <i className="fa fa-check" />
                        <div className="profile_name">
                          <h4>
                            User 
                            <span className="profile_username">@user </span>
                            <span id="wallet" className="profile_wallet">
                              {currentAddress ? currentAddress : "0x71a06125a260d33aa2F0F61ceac539a84E64c675"}
                            </span>
                            <button type="button" id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                   {/* }  */}
                     
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                    <div className="profile_follower">500 followers</div>
                  </div>
                  <div className="de-flex-col">
                    <a href="#" className="btn-main">
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="de_tab">
                <div className="de_tab_content">
                  <div className="tab-1">
                    <div className="row">
                      {  console.log(nfts,myNftLoadingState)}
                      {myNftLoadingState === true && !myNfts.length ? (
                        <h1>No assets owned</h1>
                      ) : (
                        <>
                          {myNfts.map((nft, i) => {
                            return (
                              <div
                                key={i}
                                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                              >
                                <div className="nft__item">
                                  <div className="author_list_pp">
                                    <a href="#">
                                      <img
                                        className="lazy"
                                        src="/img/author/author-1.jpg"
                                        alt
                                      />
                                      <i className="fa fa-check" />
                                    </a>
                                  </div>
                                  <div className="nft__item_wrap">
                                    <a href="#">
                                      <img
                                        src={nft.image}
                                        className="lazy nft__item_preview"
                                        alt
                                      />
                                    </a>
                                  </div>
                                  <div className="nft__item_info">
                                    <a href="#">
                                      <h4>{nft.name}</h4>
                                    </a>
                                    <div className="nft__item_price">
                                      {nft.price} ETH<span>1/20</span>
                                    </div>
                                  
                                    <div className="nft__item_like">
                                      <i className="fa fa-heart" />
                                      <span>50</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
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

export default MyItems;