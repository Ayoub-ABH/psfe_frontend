import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <div className="section">
        <div className="container cart-prods">
          <div className="row c-product">
            <div className="col-lg-2 ">
              <p className="pro-num">1</p>
            </div>
            <div className="col-lg-2 c-product-img">
              <img src="./img/product05.png" alt="" />
            </div>
            <div className="col-lg-2 c-product-body ">
              <p>Category</p>
              <h4>
                <a href="#">product name goes here</a>
              </h4>
              <h5>
                $980.00 <del className="c-product-old-price">$990.00</del>
              </h5>

              <div className="c-product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="col-lg-2 c-product-btns">
              <div >
                <p>Quantity</p>
                <input type="number" name="qty" class="input" defaultValue={1} min={1} required />
              </div>
              <button type="button" class="btn btn-large btn-block btn-danger mrt">
                delete
              </button>
            </div>
          </div>



          <div className="row c-product">
            <div className="col-lg-2 ">
              <p className="pro-num">1</p>
            </div>
            <div className="col-lg-2 c-product-img">
              <img src="./img/product05.png" alt="" />
            </div>
            <div className="col-lg-2 c-product-body ">
              <p>Category</p>
              <h4>
                <a href="#">product name goes here</a>
              </h4>
              <h5>
                $980.00 <del className="c-product-old-price">$990.00</del>
              </h5>

              <div className="c-product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="col-lg-2 c-product-btns">
              <div >
                <p>Quantity</p>
                <input type="number" name="qty" class="input" defaultValue={1} min={1} required />
              </div>
              <button type="button" class="btn btn-large btn-block btn-danger mrt">
                delete
              </button>
            </div>
          </div>


          <div className="row c-product">
            <div className="col-lg-2 ">
              <p className="pro-num">1</p>
            </div>
            <div className="col-lg-2 c-product-img">
              <img src="./img/product05.png" alt="" />
            </div>
            <div className="col-lg-2 c-product-body ">
              <p>Category</p>
              <h4>
                <a href="#">product name goes here</a>
              </h4>
              <h5>
                $980.00 <del className="c-product-old-price">$990.00</del>
              </h5>

              <div className="c-product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="col-lg-2 c-product-btns">
              <div >
                <p>Quantity</p>
                <input type="number" name="qty" class="input" defaultValue={1} min={1} required />
              </div>
              <button type="button" class="btn btn-large btn-block btn-danger mrt">
                delete
              </button>
            </div>
          </div>
        </div>

        <div className="section">
            <div className="container">
              <div className="row">
              <div className="cart-summary">
                  <h3>3 Item(s) selected</h3>
                  <h4>SUBTOTAL: $2940.00</h4>
                </div>
                <div className="cart-btns">
                  <Link  to="/checkout">
                  Checkout <i className="fa fa-arrow-circle-right" />
                  </Link>
                  <Link  to="/shop">
                    continue shopping 
                  </Link>
                </div>
              </div>
            </div>

        </div>


      </div>
    );
  }
}
