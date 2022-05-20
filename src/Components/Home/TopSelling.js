import React from "react";
import {Link} from 'react-router-dom'

function TopSelling(props) {

  return (
    <div>
      {/*<!-- SECTION -->*/}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-3" className="products-slick-nav" />
                </div>
              </div>
              <div className="products-widget-slick" data-nav="#slick-nav-3">
                <div>
                  {/* product widget */}

                  {props.products.slice(0, 3).map((product) => (

                    <div key={product._id} className="product-widget">
                      <div className="product-img">
                        <img src={`/img/${product.image}`} alt={`${product.image}`} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                          <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h3>
                        <h4 className="product-price">
                          ${product.price}{" "}
                          <del className="product-old-price">{product.old_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}

                  {/* /product widget */}
                </div>
                <div>
                  {/* product widget */}
                  {props.products.slice(3, 6).map((product) => (

                    <div key={product._id} className="product-widget">
                      <div className="product-img">
                        <img src={`./img/${product.image}`} alt={`${product.image}`} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h3>
                        <h4 className="product-price">
                          ${product.price}{" "}
                          <del className="product-old-price">{product.old_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}
                  {/* /product widget */}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-4" className="products-slick-nav" />
                </div>
              </div>
              <div className="products-widget-slick" data-nav="#slick-nav-4">
                <div>
                  {/* product widget */}

                  {props.products.slice(3, 6).map((product) => (

                    <div key={product._id} className="product-widget">
                      <div className="product-img">
                        <img src={`./img/${product.image}`} alt={`${product.image}`} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h3>
                        <h4 className="product-price">
                          ${product.price}{" "}
                          <del className="product-old-price">{product.old_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}

                  {/* /product widget */}
                </div>
                <div>
                  {/* product widget */}
                  {props.products.slice(0, 3).map((product) => (

                    <div key={product._id} className="product-widget">
                      <div className="product-img">
                        <img src={`./img/${product.image}`} alt={`${product.image}`} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h3>
                        <h4 className="product-price">
                          ${product.price}{" "}
                          <del className="product-old-price">{product.old_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}
                  {/* /product widget */}
                </div>
              </div>
            </div>
            <div className="clearfix visible-sm visible-xs" />
            <div className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div id="slick-nav-5" className="products-slick-nav" />
                </div>
              </div>
              <div className="products-widget-slick" data-nav="#slick-nav-5">
                <div>
                  {/* product widget */}

                  {props.products.slice(0, 3).map((product) => (

                    <div key={product._id} className="product-widget">
                      <div className="product-img">
                        <img src={`./img/${product.image}`} alt={`${product.image}`} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h3>
                        <h4 className="product-price">
                          ${product.price}{" "}
                          <del className="product-old-price">{product.old_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}

                  {/* /product widget */}
                </div>
                <div>
                  {/* product widget */}
                  {props.products.slice(3, 6).map((product) => (

                    <div key={product._id} className="product-widget">
                      <div className="product-img">
                        <img src={`./img/${product.image}`} alt={`${product.image}`} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h3>
                        <h4 className="product-price">
                          ${product.price}{" "}
                          <del className="product-old-price">{product.old_price}</del>
                        </h4>
                      </div>
                    </div>
                  ))}
                  {/* /product widget */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*<!-- /SECTION -->*/}
    </div>
  );
}

export default TopSelling;