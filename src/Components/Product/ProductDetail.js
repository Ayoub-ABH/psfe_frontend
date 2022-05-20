import React, { Component } from "react";
import Rating from "./Rating";

function ProductDetail(props) {



    return (
      <div>
        {/*<!-- Product main img -->*/}
        <div className="col-md-5 col-md-push-2">
          <div id="product-main-img">
            <div className="product-preview">
              <img src={`/img/${props.product.image}`} alt={props.product.image} />
            </div>
            
            
          </div>
        </div>

        {/*<!-- /Product main img -->*/}

        {/*<!-- Product thumb imgs -->*/}
        <div className="col-md-2  col-md-pull-5">
          <div id="product-imgs">
            <div className="product-preview">
              <img src={`/img/${props.product.image}`} alt={props.product.image}  />
            </div>
            <div className="product-preview">
              <img src={`/img/${props.product.image}`} alt={props.product.image}  />
            </div>
            <div className="product-preview">
              <img src={`/img/${props.product.image}`} alt={props.product.image}  />
            </div>
            
          </div>
        </div>

        {/*<!-- /Product thumb imgs -->*/}

        {/*<!-- Product details -->*/}
        <div className="col-md-5">
          <div className="product-details">
            <h2 className="product-name">{props.product.name}</h2>
            <div>

              <Rating rating={props.product.rating}/>

              <span className="review-link" >
                {props.product.numReviews} Review(s) 
              </span>
            </div>
            <div>
              <h3 className="product-price">
                {props.product.price}<del className="product-old-price">{props.product.old_price}</del>
              </h3>
              <span className="product-available">
                {
                  props.product.quantity > 0 ? "In Stock" : "Out of Stock"
                }
                
              </span>
            </div>
            <p>
              {props.product.description}
            </p>
            {/* <div className="product-options">
              <label>
                Size
                <select className="input-select">
                  <option value={0}>X</option>
                </select>
              </label>
              <label>
                Color
                <select className="input-select">
                  <option value={0}>Red</option>
                </select>
              </label>
            </div> */}
            <div className="add-to-cart">
              <div className="qty-label">
                Qty
                <div className="input-number">
                  <input type="number" />
                  <span className="qty-up">+</span>
                  <span className="qty-down">-</span>
                </div>
              </div>
              <button className="add-to-cart-btn">
                <i className="fa fa-shopping-cart" /> add to cart
              </button>
            </div>
            <ul className="product-btns">
              <li>
                <a href="#">
                  <i className="fa fa-heart-o" /> add to wishlist
                </a>
              </li>
              
            </ul>
            <ul className="product-links">
              <li>Category:</li>
              <li>
                {props.product.category}
              </li>
              
            </ul>
            <ul className="product-links">
              <li>Share:</li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*<!-- /Product details -->*/}
      </div>
    );
  
}


export default ProductDetail;