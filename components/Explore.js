import React, { useEffect } from "react";

import { Web3Context } from "../context/Web3Context";
import Link from "next/link";

function Explore() {
  const web3Context = React.useContext(Web3Context);
  const { nfts, loadingState, loadNFTs, buyNft, loader } = web3Context;

  useEffect(() => {
    loadNFTs();
  }, []);

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      {}
      <section id="subheader" className="text-light bg-container">

      <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Explore</h1>
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
          {loader == true ? (
            <h3 style={{ color: "blueviolet", fontWeight: "#403f83" }}>
              <i className="fa fa-spinner fa-pulse fa-fw"></i> Loading...! Buy-item Please wait!!! 
            </h3>
          ) : (
            <div className="row wow fadeIn">
              {loadingState === true && !nfts.length ? (
                <h1>No items in marketplace</h1>
              ) : (
                <>
                  {nfts.map((nft, i) => {
                    return (
                      <div
                        key={i}
                        className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                      >
                        <div className="nft__item">
                          <div className="author_list_pp">
                            <a href="author.html">
                              <img
                                className="lazy"
                                src={`/img/author/author-${i + 1}.jpg`}
                                alt
                              />
                              <i className="fa fa-check" />
                            </a>
                          </div>
                          <div className="nft__item_wrap">
                            <a href="item-details.html">
                              <img
                                src={nft.image}
                                className="lazy nft__item_preview"
                                alt
                              />
                            </a>
                          </div>
                          <div className="nft__item_info">
                            <Link
                            href={{
                              pathname: "details",
                              query: { 
                                  image: nft.image,
                                  description: nft.description,
                                  seller: nft.seller,
                                  tokenId:nft.tokenId,
                                  name: nft.name,
                                  price: nft.price,  
                              }
                          }} 
                            >
                              <h4>{nft.name}</h4>
                            </Link>
                            <div className="nft__item_price">
                              {nft.price} MATIC<span>1/20</span>
                             </div>
                            <div
                              className="nft__item_action"
                              onClick={() => buyNft(nft)}
                            >
                              <a href="#">Buy Item</a>
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

              <div className="col-md-12 text-center">
                <a
                  href="#"
                  id="loadmore"
                  className="btn-main wow fadeInUp lead"
                >
                  Load more
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Explore;
