import React, { useEffect, useState } from "react";
import Rating from "../Product/Rating";

function NewProduct(props) {
  return (
    <div className="section">
      {/*<!-- SECTION -->*/}
      <div className="container">
        <div className="row">
          {/*<!-- section title -->*/}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">New Products</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="/">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="/">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="/">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="/">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*<!-- /section title -->*/}

          {/*<!-- Products tab & slick -->*/}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                {/*<!-- tab -->*/}
                <div id={`tab${props.slick}`} className="tab-pane active">
                  <div className="products-slick" data-nav={`#slick-nav-${props.slick}`}>
                    {/*<!-- product -->*/}
                    {props.products.map((product) => (
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
                    ))}
                    {/*!--product--*/}
                  </div>
                  <div id={`slick-nav-${props.slick}`} className="products-slick-nav"></div>
                </div>
                {/*<!-- /tab -->*/}
              </div>
            </div>
          </div>
          {/*<!-- Products tab & slick -->*/}
        </div>
      </div>
      {/*<!-- /SECTION -->*/}
    </div>
  );
}

export default NewProduct;
