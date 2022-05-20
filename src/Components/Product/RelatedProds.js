import React, { Component } from "react";

export default class RelatedProds extends Component {
  render() {
    return (
      <div className="section">
        {/*<!-- container -->*/}
        <div className="container">
          {/*<!-- row -->*/}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="title">Related Products</h3>
              </div>
            </div>

            {/*<!-- product -->*/}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="/img/product01.png" alt />
                  <div className="product-label">
                    <span className="sale">-30%</span>
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
                  <div className="product-rating" />
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

            {/*<!-- /product -->*/}

            {/*<!-- product -->*/}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="/img/product02.png" alt />
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

            {/*<!-- /product -->*/}

            <div className="clearfix visible-sm visible-xs"></div>

            {/*<!-- product -->*/}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="/img/product03.png" alt />
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

            {/*<!-- /product -->*/}

            {/*<!-- product -->*/}
            <div className="col-md-3 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="/img/product04.png" alt />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="product-price">
                    $980.00 <del className="product-old-price">$990.00</del>
                  </h4>
                  <div className="product-rating" />
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

            {/*<!-- /product -->*/}
          </div>
          {/*<!-- /row -->*/}
        </div>
        {/*<!-- /container -->*/}
      </div>
    );
  }
}
