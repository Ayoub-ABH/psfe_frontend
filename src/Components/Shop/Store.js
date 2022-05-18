import React, { Component } from "react";
import Rating from "../Product/Rating";

function Store(props) {

  


    return (
      <div>
        
          

          {/*<!-- store products --> */}
          <div className="row">



            {/* <!-- product -->*/}
            {props.products.docs.map((product)=>
              <>
                    <div className="col-md-4 col-sm-6">
                    <div className="product" key={product._id}>
                          <div className="product-img">
                            <img src={`./img/${product.image}`} alt={`${product.image}`} />
                            {/* <div className="product-label">
                              <span className="sale">-30%</span>
                              <span className="new">NEW</span>
                            </div> */}
                          </div>
                          <div className="product-body">
                            <p className="product-category">{product.category}</p>
                            <h3 className="product-name">
                              <a href="/">{product.name}</a>
                            </h3>
                            <h4 className="product-price">
                              ${product.price} {" "}
                              <del className="product-old-price">${product.old_price}</del>
                            </h4>

                            <Rating rating={product.rating}/>

                            <div className="product-btns">
                              <button className="add-to-wishlist">
                                <i className="fa fa-heart-o"></i>
                                <span className="tooltipp">add to wishlist</span>
                              </button>
                              
                              <button className="quick-view">
                                <i className="fa fa-eye"></i>
                                <span className="tooltipp">quick view</span>
                              </button>
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn">
                              <i className="fa fa-shopping-cart"></i> add to cart
                            </button>
                          </div>
                        </div>
                  </div>

                  <div className="clearfix visible-sm visible-xs"></div>
                  </>
      
              )}

            </div>
            
            {/*<!-- /product --> */}

            
          {/*<!-- /store products --> */}

          
        </div>
        
      
    );
  
}


export default Store;