import React, { useEffect } from "react";
import { withRouter } from "next/router";
import { Web3Context } from "../context/Web3Context";
import { Avatar, Fab } from "@material-ui/core";

function NftDetails({ router: { query } }) {
  const web3Context = React.useContext(Web3Context);
  const { buyNft, loader, getCreatorData, creator } = web3Context;

  useEffect(() => {
    if (query.seller !== undefined) {
      getCreatorData(query.seller);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);


  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        {}
        <section id="subheader" className="text-light bg-container">
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Nft Details Page</h1>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </section>
        {}
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  alt="nft-img"
                  src={query.image}
                  className="img-fluid img-rounded mb-sm-30"
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{`${query.name}#${query.tokenId}`}</h2>
                  <div className="item_info_counts">
                    <div className="item_info_type">
                      <i className="fa fa-image"></i>Art
                    </div>
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>250
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>18
                    </div>
                  </div>
                  <p>{query.description} </p>
                  <div className="d-flex flex-row mb-4">
                    <div className="mr40">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <a href="">
                            <Fab
                              size="small"
                              color="secondary"
                              className="ml-3 font-weight-bold"
                            >
                              {creator != undefined ? creator.Initials : "u"}
                            </Fab>
                            {/* <img alt="nft-img" className="lazy" src="/img/author/author-1.jpg" alt="" /> */}
                            <i className="fa fa-check"></i>
                          </a>
                        </div>
                        <div className="author_list_info">
                          {creator != undefined ? creator.Name : "User"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="currentPrice">Current Price</div>
                  <div className="de_tab tab_simple">
                    <div className="price">
                      <img
                        src="/img/polygon-matic-logo.png"
                        height={"25px"}
                        width={"20px"}
                      />
                      <div style={{ marginLeft: "10px" }}>{query.price}</div>
                    </div>
                    <div className="spacer-10 mt-3"></div>
                    {query.page === "explore" ? (
                      <div
                        className="btn-main btn-lg"
                        onClick={() => buyNft(query)}
                      >
                        {loader == true
                          ? "Loading...! Please wait it will take time"
                          : "Buy Now"}
                      </div>
                    ) : (
                      ""
                    )}
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="modal fade" id="buy_now" tabindex="-1" aria-labelledby="buy_now" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered de-modal">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="p-3 form-border">
                                <h3>Checkout</h3>
                                You are about to purchase a <b>AnimeSailorClub #304</b> from <b>Monica Lucas</b>
                                <div className="spacer-single"></div>
                                <h6>Enter quantity. <span className="id-color-2">10 available</span></h6>
                                <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control" value="1" />
                                <div className="spacer-single"></div>
                                <div className="de-flex">
                                    <div>Your balance</div>
                                    <div><b>10.67856 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>Service fee 2.5%</div>
                                    <div><b>0.00325 ETH</b></div>
                                </div>
                                <div className="de-flex">
                                    <div>You will pay</div>
                                    <div><b>0.013325 ETH</b></div>
                                </div>
                                <div className="spacer-single"></div>
                                <a href="wallet.html" target="_blank" className="btn-main btn-fullwidth">Add funds</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}

      <a href="#" id="back-to-top"></a>
    </>
  );
}
export default withRouter(NftDetails);
