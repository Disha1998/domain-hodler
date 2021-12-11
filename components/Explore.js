import React, { useEffect } from "react";

import { Web3Context } from "../context/Web3Context";
import Link from "next/link";

function Explore() {
  const web3Context = React.useContext(Web3Context);
  const { nfts, loadingState, loadNFTs, loader, buyNft } = web3Context;

  const [selectedValues, updateSelectedValues] = React.useState({
    category: "",
    nftType: "",
  });
  const [nftsData, setNfts] = React.useState(nfts);

  useEffect(() => {
    loadNFTs();
  }, []);

  useEffect(() => {
    setNfts(nfts);
  }, [nfts]);

  console.log(nftsData);
  console.log(selectedValues.category);

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
      <div className="row wow fadeIn">
        <div className="col-lg-3 col-sm-12 items_filter">
          <div className="form-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => {
                updateSelectedValues({
                  ...selectedValues,
                  category: e.target.value,
                });
                let data;
                if (selectedValues.nftType !== "" && e.target.value !== "") {
                  data = nfts.filter(
                    (nft) =>
                      nft.category === e.target.value &&
                      nft.nftType === selectedValues.nftType
                  );
                } else if (
                  e.target.value === "" &&
                  selectedValues.nftType === ""
                ) {
                  data = nfts;
                } else if (e.target.value === "") {
                  data = nfts.filter(
                    (nft) => nft.nftType === selectedValues.nftType
                  );
                } else {
                  data = nfts.filter((nft) => nft.category === e.target.value);
                }

                setNfts(data);
                console.log(data);
              }}
            >
              <option selected value="">
                Category
              </option>
              <option value="Christmas Gift">Christmas Gift</option>
              <option value="New Year Gift">New Year Gift</option>
              <option value="Valentines Gift">Valentines Gift</option>
              <option value="Birthday Gift">Birthday Gift</option>
              <option value="Annivarsary Gift">Annivarsary Gift</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 items_filter">
          <div className="form-group ">
            <select
              className="form-control "
              id="exampleFormControlSelect1"
              onChange={(e) => {
                updateSelectedValues({
                  ...selectedValues,
                  nftType: e.target.value,
                });
                let data;
                if (selectedValues.category !== "" && e.target.value !== "") {
                  data = nfts.filter(
                    (nft) =>
                      nft.category === selectedValues.category &&
                      nft.nftType === e.target.value
                  );
                } else if (
                  e.target.value === "" &&
                  selectedValues.category === ""
                ) {
                  data = nfts;
                } else if (e.target.value === "") {
                  data = nfts.filter(
                    (nft) => nft.category === selectedValues.category
                  );
                } else {
                  data = nfts.filter((nft) => nft.nftType === e.target.value);
                }

                setNfts(data);
                console.log(data);
              }}
            >
              <option selected value="">
                Nft Type
              </option>
              <option value="Poetry">Poetry</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Event Ticket">Event Ticket</option>
              <option value="Virtualand">Virtualand</option>
            </select>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <section aria-label="section">
        <div className="container">
          {
            <div className="row wow fadeIn">
              {loadingState === true && !nftsData.length ? (
                <h1>No items in marketplace</h1>
              ) : (
                <>
                  {nftsData.map((nft, i) => {
                    return (
                      <div
                        key={i}
                        className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                      >
                        <Link
                          href={{
                            pathname: "details",
                            query: {
                              image: nft.image,
                              description: nft.description,
                              seller: nft.seller,
                              tokenId: nft.tokenId,
                              name: nft.name,
                              price: nft.price,
                              owner: nft.owner,
                              page: "explore",
                            },
                          }}
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
                              <a href="">
                                <img
                                  src={nft.image}
                                  className="lazy nft__item_preview"
                                  alt
                                />
                              </a>
                            </div>
                            <div className="nft__item_info">
                              <h4>{nft.name}</h4>

                              <div className="nft__item_price">
                                {nft.price} MATIC<span>1/20</span>
                              </div>
                              <div className="nft__item_action">
                                <a href="#">Buy Now</a>
                              </div>
                              <div className="nft__item_like">
                                <i className="fa fa-heart" />
                                <span>50</span>
                              </div>
                            </div>
                          </div>
                        </Link>
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
            
          }
        </div>
      </section>
    </div>
  );
}

export default Explore;
