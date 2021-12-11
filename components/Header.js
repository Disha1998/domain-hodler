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
    <header
      className={`transparent ${
        router.asPath == "/" ? "header-dark" : "header-blue"
      } scroll-light`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {}
                  <div id="logo">
                    <a href="">
                      <img
                        alt="image"
                        className="logo"
                        src={`/img/${
                          router.asPath == "/explore" ||
                          router.asPath == "/create" ||
                          router.asPath == "/profile" ||
                          router.asPath == "/my-items"
                            ? "logo5.png"
                            : "logo5.png"
                        }`}
                      />
                      <img
                        alt="image"
                        className="logo-2"
                        src="/img/logo5.png"
                      />
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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Link href="explore">Explore</Link>
                  </li>
                  <li>
                    <Link href="my-items">My items</Link>
                  </li>

                  <li>
                    <Link href="create">Create</Link>
                  </li>
                  <li>
                    <Link href="profile"> Profile</Link>
                  </li>
                  {/* <li id="profile">
                    <a href="profile.html">
                      Profile
                      <span />
                    </a>
                  </li> */}
                </ul>

                {currentAddress === "" || currentAddress === "null" || currentAddress === null ? (
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
                      style={{ color: router.asPath == "/" ? "black" : "white" }}
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
