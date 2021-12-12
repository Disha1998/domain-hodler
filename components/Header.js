import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Web3Context } from "../context/Web3Context";
function Header() {
  const router = useRouter();
  const web3Context = React.useContext(Web3Context);
  const { currentAddress, connectWallet } = web3Context;
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <header className={`bg-gredient`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {}
                  <div id="logo">
                    <a href="/">
                      <h4 className="logo">Domain Hodler</h4>
                    </a>
                  </div>
                  {}
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                {}
                <ul
                  id="mainmenu"
                  className={` ${isSticky ? "" : "header-dark-text"}`}
                >
                  <li>
                    <Link href="/">Browse</Link>
                  </li>
                  <li>
                    <Link href="/sell">Sell</Link>
                  </li>

                  {/* <li id="profile">
                    <a href="profile.html">
                      Profile
                      <span />
                    </a>
                  </li> */}
                </ul>
                {currentAddress === "" ||
                currentAddress === "null" ||
                currentAddress === null ||
                currentAddress === "undefined" ? (
                  <div
                    className="menu_side_area"
                    id="connect"
                    onClick={() => connectWallet()}
                  >
                    <a className="btn-main">
                      <i className="icon_wallet_alt"></i>
                      <span>Connect Wallet</span>
                    </a>
                    <span id="menu-btn" />
                  </div>
                ) : (
                  <div className="profile_name">
                    <span
                      id="wallet"
                      className="profile_wallet"
                      style={{ color: "white" }}
                    >
                      {currentAddress ? (
                        currentAddress
                      ) : (
                        <a className="btn-main">
                          <i className="icon_wallet_alt"></i>
                          <span>Connect Wallet</span>
                        </a>
                      )}
                    </span>
                    {/* <button type="button" id="btn_copy" title="Copy Text">
                              Copy
                            </button>  */}
                    <span id="menu-btn" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
