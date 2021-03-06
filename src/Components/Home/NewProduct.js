import { Link } from "react-router-dom";
import { addToCart } from "../../features/product/cartSlice";
import Rating from "../Product/Rating";
import { useDispatch } from 'react-redux';


function NewProduct(props) {

  const dispatch = useDispatch()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }


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
                <div  className="tab-pane active">
                  <div className="products-slick" >
                    {/*<!-- product -->*/}
                    {props.products.map((product) => (
                      <div className="product col-lg-3 col-md-6 col-xm-12 product-new"  key={product._id}>
                        <div className="product-img">
                          <img src={`/img/${product.image}`} alt={`${product.image}`} />
                          {/* <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div> */}
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h3 className="product-name">
                            <Link to={"/product/"+product._id}>{product.name}</Link>
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
                          <button onClick={()=>handleAddToCart(product)} className="add-to-cart-btn">
                            <i className="fa fa-shopping-cart"></i> add to cart
                          </button>
                        </div>
                      </div>
                    ))}
                    {/*!--product--*/}
                  </div>
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
