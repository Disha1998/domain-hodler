import React, { useEffect } from "react";

import { Web3Context } from "../context/Web3Context";
import Link from "next/link";
import { Avatar, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function Explore() {
  const classes = useStyles();
  const router = useRouter()
  const web3Context = React.useContext(Web3Context);
  const { nfts, loadingState, loadNFTs, loader, buyNft, userAllData ,loadSellerNfts} = web3Context;
  const [category, setCategory] = React.useState('');
  const [nftType, setNftType] = React.useState('');


  useEffect(() => {
    loadNFTs();
  }, []);


  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeNfttype = (event) => {
    setNftType(event.target.value);
  };

  const handleSellerProfile=(add)=>{ 
    loadSellerNfts(add); 
  }


  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      { }
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
      { }
      { }
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Gift Categories</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={category}
                  onChange={handleChange}
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}></MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">NFT Types</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={nftType}
                  onChange={handleChangeNfttype}
                  label="NFT Types"
                > 
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={Poetry}>Poetry</MenuItem>
                  <MenuItem value={Music}>Music</MenuItem>
                  <MenuItem value={Art}>Art</MenuItem>
                  <MenuItem value={CourseSubscription}>Course Subscription</MenuItem>
                  <MenuItem value={PodcastSubscription}>Podcast Subscription</MenuItem>
                  <MenuItem value={Art}>Art</MenuItem>
                </Select>
              </FormControl> */}
            </div>
          </div>
        </div>
      </section>
      { }

      <div className="container">
        {loader == true ? (
          <h3 style={{ color: "blueviolet", fontWeight: "#403f83" }}>
            <i className="fa fa-spinner fa-pulse fa-fw"></i> Loading...!
            Buy-item Please wait!!!
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
                      {/* <Link
                          href={{
                            pathname: "details",
                            query: {
                              image: nft.image,
                              description: nft.description,
                              seller: nft.seller,
                              tokenId: nft.tokenId,
                              name: nft.name,
                              price: nft.price,
                              owner:nft.owner
                            },
                          }}
                        > */}
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <a href="author.html">
                            <img
                              className="lazy"
                              src={`/img/author/author-${i + 1}.jpg`}
                              alt="true"
                            />
                            <i className="fa fa-check" />
                          </a>
                        </div>
                        <div className="nft__item_wrap">
                          <a href="">
                            <img
                              src={nft.image}
                              className="lazy nft__item_preview"
                              alt="true"
                            />
                          </a>
                        </div>
                        <div className="nft__item_info">
                          <h4>{nft.name}</h4>

                          <div className="nft__item_price">
                            {nft.price} MATIC<span>1/20</span>
                          </div>
                          <div
                            className="nft__item_action"
                            onClick={() => buyNft(nft)}
                          >
                            <a href="#">Buy Now</a>
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart" />
                            <span>50</span>
                          </div>
                        </div>
                      </div>
                      {/* </Link> */}
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


      <section id="section-popular" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Top Sellers</h2>
                <div className="small-border bg-color-2" />
              </div>
            </div>
            <div className="col-md-12 wow fadeIn">
              <ol className="author_list">

                {
                  userAllData ? userAllData.map((e) => {
                    return <li key={e.WalletAddress} >
                      <div  className="author_list_pp">
                        {/* <a href=""> */}
                        <Fab size="small" color="secondary" className="ml-3 font-weight-bold">
                          {e.Initials}
                        </Fab>
                        {/* <img
                            className="lazy"
                            src="/img/author/author-1.jpg"
                            alt="image"
                          />
                          <i className="fa fa-check" /> */}
                        {/* </a> */}
                      </div>
                      <div onClick={()=>handleSellerProfile(e.WalletAddress)} className="author_list_info">
                        <a href="#">{e.Name}</a>
                        {/* <span>3.2 ETH</span> */}
                      </div>
                    </li>
                  }) : ""
                }
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
