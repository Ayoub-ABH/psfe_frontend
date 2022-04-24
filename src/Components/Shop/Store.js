import React, { Component } from "react";

export default class Store extends Component {
  render() {
    return (
      <div>
        {/*< !-- STORE -->*/}
        <div id="store" className="col-md-9">
          {/* <!-- store top filter -->*/}
          <div className="store-filter clearfix">
            <div className="store-sort">
              <label>
                Sort By:
                <select className="input-select">
                  <option value={0}>Popular</option>
                  <option value={1}>Position</option>
                </select>
              </label>
              <label>
                Show:
                <select className="input-select">
                  <option value={0}>20</option>
                  <option value={1}>50</option>
                </select>
              </label>
            </div>
            <ul className="store-grid">
              <li className="active">
                <i className="fa fa-th" />
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-th-list" />
                </a>
              </li>
            </ul>
          </div>

          {/*<!-- /store top filter --> */}

          {/*<!-- store products --> */}
          <div className="row">
            {/* <!-- product -->*/}
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/product01.png" alt />
                  <div className="product-label">
                    <span className="sale">-30%</span>
                    <span className="new">NEW</span>
                  </div>
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o" />
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare">
                      <i className="fa fa-exchange" />
                      <span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye" />
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" /> add to cart
                  </button>
                </div>
              </div>
            </div>

            {/*<!-- /product --> */}

            {/*<!-- product --> */}
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/product02.png" alt />
                  <div className="product-label">
                    <span className="new">NEW</span>
                  </div>
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o" />
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare">
                      <i className="fa fa-exchange" />
                      <span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye" />
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" /> add to cart
                  </button>
                </div>
              </div>
            </div>

            {/*<!-- /product --> */}

            <div className="clearfix visible-sm visible-xs"></div>

            {/* <!-- product -->*/}
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/product03.png" alt />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating"></div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o" />
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare">
                      <i className="fa fa-exchange" />
                      <span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye" />
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" /> add to cart
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- /product -->*/}

            <div className="clearfix visible-lg visible-md"></div>

            {/* <!-- product -->*/}
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/product04.png" alt />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating"></div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o" />
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare">
                      <i className="fa fa-exchange" />
                      <span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye" />
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" /> add to cart
                  </button>
                </div>
              </div>
            </div>

            {/*<!-- /product --> */}

            <div className="clearfix visible-sm visible-xs"></div>

            {/*<!-- product --> */}
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/product05.png" alt />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating"></div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o" />
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare">
                      <i className="fa fa-exchange" />
                      <span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye" />
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" /> add to cart
                  </button>
                </div>
              </div>
            </div>

            {/*<!-- /product --> */}

            {/*<!-- product --> */}
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/product06.png" alt />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist">
                      <i className="fa fa-heart-o" />
                      <span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare">
                      <i className="fa fa-exchange" />
                      <span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view">
                      <i className="fa fa-eye" />
                      <span className="tooltipp">quick view</span>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" /> add to cart
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- /product -->*/}

            <div className="clearfix visible-lg visible-md visible-sm visible-xs"></div>

            {/* <!-- product -->*/}
            <div>
              <div className="col-md-4 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src="./img/product07.png" alt />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* /product */} 
              {/* product */} 
              <div className="col-md-4 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src="./img/product08.png" alt />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating"></div>
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>
               {/* /product */}
              <div className="clearfix visible-sm visible-xs" />
              {/* product */} 
              <div className="col-md-4 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src="./img/product09.png" alt />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                    <div className="product-rating"></div>
                    <div className="product-btns">
                      <button className="add-to-wishlist">
                        <i className="fa fa-heart-o" />
                        <span className="tooltipp">add to wishlist</span>
                      </button>
                      <button className="add-to-compare">
                        <i className="fa fa-exchange" />
                        <span className="tooltipp">add to compare</span>
                      </button>
                      <button className="quick-view">
                        <i className="fa fa-eye" />
                        <span className="tooltipp">quick view</span>
                      </button>
                    </div>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart" /> add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* /product */} 
            </div>
          </div>
          {/*<!-- /store products --> */}

          {/*<!-- store bottom filter --> */}
          <div className="store-filter clearfix">
            <span className="store-qty">Showing 20-100 products</span>
            <ul className="store-pagination">
              <li className="active">1</li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- /store bottom filter -->*/}
        </div>
        {/*<!-- /STORE --> */}
      </div>
    );
  }
}
