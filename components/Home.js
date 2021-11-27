import React from "react";

import {
  faWallet,
  faUpload,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

function HomeComponent() {

  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    return (
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        <section
          id="section-hero"
          aria-label="section"
          className="no-top no-bottom vh-100"
          data-bgimage="url(img/background/bg-shape-1.jpg) bottom"
        >
          <div className="v-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="spacer-single" />
                  <h6 className="wow fadeInUp" data-wow-delay=".5s">
                    <span className="text-uppercase id-color-2">
                      NFT Hunt
                    </span>
                  </h6>
                  <div className="spacer-10" />
                  <h1 className="wow fadeInUp" data-wow-delay=".75s">
                    Create, sell or collect digital items.
                  </h1>
                  <p className="wow fadeInUp lead" data-wow-delay="1s">
                    Unit of data stored on a digital ledger, called a
                    blockchain, that certifies a digital asset to be unique and
                    therefore not interchangeable
                  </p>
                  <div className="spacer-10" />
                  <a
                    href="explore"
                    className="btn-main wow fadeInUp lead"
                    data-wow-delay="1.25s"
                  >
                    Explore
                  </a>
                  <div className="mb-sm-30" />
                </div>
                <div className="col-md-6 xs-hide">
                  <img
                    src="/img/misc/nft.png"
                    className="lazy img-fluid wow fadeIn"
                    data-wow-delay="1.25s"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-intro" className="no-top no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-sm-30">
                <div className="feature-box f-boxed style-3">
                  <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet "/> 
                  <div className="text">
                    <h4 className="wow fadeInUp">Set up your wallet</h4>
                    <p className="wow fadeInUp" data-wow-delay=".25s">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem.
                    </p>
                  </div>
                  <i className="wm icon_wallet"/> 
                 
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-sm-30">
                <div className="feature-box f-boxed style-3">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt "/> 
                  <div className="text">
                    <h4 className="wow fadeInUp">Add your NFT's</h4>
                    <p className="wow fadeInUp" data-wow-delay=".25s">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem.
                    </p>
                  </div>
                  <i className="wm icon_cloud-upload_alt"/> 
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-sm-30">
                <div className="feature-box f-boxed style-3">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt "/>
                   
                  
                  <div className="text">
                    <h4 className="wow fadeInUp">Sell your NFT's</h4>
                    <p className="wow fadeInUp" data-wow-delay=".25s">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem.
                    </p>
                  </div>
                  <i className="wm icon_tags_alt"/> 
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
       
        <section id="section-collections" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Hot Collections</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="collection-carousel" className="owl-carousel wow fadeIn">

                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href=""><img src="/img/collections/coll-1.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href=""><img className="lazy" src="/img/author/author-1.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href=""><h4>Abstraction</h4></a>
                                        <span>ERC-192</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href=""><img src="/img/collections/coll-2.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href=""><img className="lazy" src="/img/author/author-2.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href=""><h4>Patternlicious</h4></a>
                                        <span>ERC-61</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href=""><img src="/img/collections/coll-3.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href=""><img className="lazy" src="/img/author/author-3.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href=""><h4>Skecthify</h4></a>
                                        <span>ERC-126</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href=""><img src="/img/collections/coll-4.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href=""><img className="lazy" src="/img/author/author-4.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href=""><h4>Cartoonism</h4></a>
                                        <span>ERC-73</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href=""><img src="/img/collections/coll-5.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href=""><img className="lazy" src="/img/author/author-5.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href=""><h4>Virtuland</h4></a>
                                        <span>ERC-85</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href=""><img src="/img/collections/coll-6.jpg" className="lazy img-fluid" alt=""/></a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href=""><img className="lazy" src="/img/author/author-6.jpg" alt=""/></a>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href=""><h4>Papercut</h4></a>
                                        <span>ERC-42</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        </section>

                <section id="section-items" className="no-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2>New Items</h2>
                                    <div className="small-border bg-color-2"></div>
                                </div>
                            </div>
                            <div id="items-carousel" className="owl-carousel wow fadeIn"> 
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="de_countdown" data-year="2021" data-month="9" data-day="16" data-hour="8"></div>
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-1.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/static-1.jpg" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>Pinky Ocean</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.08 ETH<span>1/20</span>
                                                </div>
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>50</span>
                                                </div>                            
                                            </div> 
                                        </div>
                                    </div>                 
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-10.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/static-2.jpg" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>Deep Sea Phantasy</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.06 ETH<span>1/22</span>
                                                </div>
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>80</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="de_countdown" data-year="2021" data-month="9" data-day="14" data-hour="8"></div>
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-11.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/static-3.jpg" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>Rainbow Style</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.05 ETH<span>1/11</span>
                                                </div>
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>97</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-12.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/static-4.jpg" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>Two Tigers</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.02 ETH<span>1/15</span>
                                                </div>
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>73</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-9.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/anim-4.webp" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>The Truth</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.06 ETH<span>1/20</span>
                                                </div>
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>26</span>
                                                </div>                                 
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="de_countdown" data-year="2021" data-month="9" data-day="20" data-hour="8"></div>
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-2.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/anim-2.webp" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>Running Puppets</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.03 ETH<span>1/24</span>
                                                </div>    
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>45</span>
                                                </div>                                  
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className="d-item">
                                        <div className="nft__item">
                                            <div className="author_list_pp">
                                                <a href="">                                    
                                                    <img alt="" className="lazy" src="/img/author/author-3.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="nft__item_wrap">
                                                <a href="">
                                                    <img alt="" src="/img/items/anim-1.webp" className="lazy nft__item_preview" alt=""/>
                                                </a>
                                            </div>
                                            <div className="nft__item_info">
                                                <a href="">
                                                    <h4>USA Wordmation</h4>
                                                </a>
                                                <div className="nft__item_price">
                                                    0.09 ETH<span>1/25</span>
                                                </div>
                                                <div className="nft__item_action">
                                                    <a href="#"></a>
                                                </div>
                                                <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i><span>76</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section> 
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
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-1.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Monica Lucas</a>
                      <span>3.2 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-2.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Mamie Barnett</a>
                      <span>2.8 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-3.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Nicholas Daniels</a>
                      <span>2.5 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-4.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Lori Hart</a>
                      <span>2.2 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-5.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Jimmy Wright</a>
                      <span>1.9 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-6.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Karla Sharp</a>
                      <span>1.6 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-7.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Gayle Hicks</a>
                      <span>1.5 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-8.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Claude Banks</a>
                      <span>1.3 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-9.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Franklin Greer</a>
                      <span>0.9 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-10.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Stacy Long</a>
                      <span>0.8 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-11.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Ida Chapman</a>
                      <span>0.6 ETH</span>
                    </div>
                  </li>
                  <li>
                    <div className="author_list_pp">
                      <a href="">
                        <img
                          className="lazy"
                          src="/img/author/author-12.jpg"
                          alt="image"
                        />
                        <i className="fa fa-check" />
                      </a>
                    </div>
                    <div className="author_list_info">
                      <a href="">Fred Ryan</a>
                      <span>0.5 eth</span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="section-category" className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>Browse by category</h2>
                  <div className="small-border bg-color-2" />
                </div>
              </div>
              <div
                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <a href="explore.html" className="icon-box style-2 rounded">
                  <i className="fa fa-image" />
                  <span>Art</span>
                </a>
              </div>
              <div
                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <a href="explore.html" className="icon-box style-2 rounded">
                  <i className="fa fa-music" />
                  <span>Music</span>
                </a>
              </div>
              <div
                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <a href="explore.html" className="icon-box style-2 rounded">
                  <i className="fa fa-search" />
                  <span>Domain Names</span>
                </a>
              </div>
              <div
                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <a href="explore.html" className="icon-box style-2 rounded">
                  <i className="fa fa-globe" />
                  <span>Virtual Worlds</span>
                </a>
              </div>
              <div
                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".5s"
              >
                <a href="explore.html" className="icon-box style-2 rounded">
                  <i className="fa fa-vcard" />
                  <span>Trading Cards</span>
                </a>
              </div>
              <div
                className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight"
                data-wow-delay=".6s"
              >
                <a href="explore.html" className="icon-box style-2 rounded">
                  <i className="fa fa-th" />
                  <span>Collectibles</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default HomeComponent;
