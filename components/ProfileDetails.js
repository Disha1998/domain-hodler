import React, { useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { Avatar, Fab } from '@material-ui/core';
import { useRouter } from 'next/router';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';




function ProfileDetails() {
    const router = useRouter();
    const web3Context = React.useContext(Web3Context);
    const { sellerData, sellerNfts, currentAddress, myNftLoadingState } = web3Context;
    const [nfts, setNfts] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
    }, [sellerData]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
                                {/* <h1>My Items</h1> */}
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </section>
            { }
            <Dialog open={open}  fullWidth={'true'} onClose={handleClose}>
                <DialogTitle>Send Message</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Message"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Send</Button>
                </DialogActions>
            </Dialog>
            { }
            <section aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d_profile de-flex">
                                <div className="de-flex-col">

                                    <div className="profile_avatar">
                                        <Fab size="large" color="primary" className="ml-3 font-weight-bold">
                                            {sellerData.Initials != undefined ? sellerData.Initials : "u"}
                                        </Fab>

                                        <div className="profile_name">
                                            <h4>  {sellerData.Name != undefined ? sellerData.Name : "User"}
                                                <span className="profile_username">  {`${sellerData.Username != undefined ? "@" + sellerData.Username : "@username"}`}</span>
                                                {
                                                    sellerData.WalletAddress != undefined ? <>
                                                        <span id="wallet" className="profile_wallet">
                                                            {sellerData.WalletAddress ? sellerData.WalletAddress : currentAddress}
                                                        </span>
                                                        <button type="button" id="btn_copy" title="Copy Text">
                                                            Copy
                                                        </button>
                                                    </> : ''
                                                }

                                            </h4>
                                        </div>
                                    </div>
                                    {/* }  */}

                                </div>
                                <div className="profile_follow de-flex">
                                    <div className="de-flex-col">
                                        <div className="profile_follower">500 followers</div>
                                    </div>
                                    <div className="de-flex-col" onClick={handleClickOpen}>
                                        <a href="#" className="btn-main">
                                            Send Message
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
                                            {myNftLoadingState === true && !sellerNfts.length ? (
                                                <h1>No assets Available</h1>
                                            ) : (
                                                <>
                                                    {sellerNfts.map((nft, i) => {
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
                                                                        <a href={{
                                                                            pathname: "details",
                                                                            query: {
                                                                                image: nft.image,
                                                                                description: nft.description,
                                                                                seller: nft.seller,
                                                                                tokenId: nft.tokenId,
                                                                                name: nft.name,
                                                                                price: nft.price,
                                                                            }
                                                                        }} >
                                                                            <h4>{nft.name}</h4>
                                                                        </a>
                                                                        <div className="nft__item_price">
                                                                            {nft.price} MATIC<span>1/20</span>
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
    )
}

export default ProfileDetails
