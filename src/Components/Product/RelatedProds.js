import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../features/product/cartSlice";
import { getHomeProducts, getOneProduct } from "../../features/product/productSlice";
import Rating from "./Rating";

function RelatedProds () {


  const {products,isSuccess,isError,message}= useSelector((state)=>state.products);
  const dispatch = useDispatch()
  const {id} =useParams()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
	
	useEffect(  () =>{
		if (isError) {
			toast.error(message)
		} 
	    dispatch(getHomeProducts());

	},[]) 




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

            {isSuccess? products.new.map((product) => (
                      <div className="col-md-3 col-xs-6" key={product._id}>
                      <div className="product "  >
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
                      </div>
                    )):(<></>)}
            

            {/*<!-- /product -->*/}

            
          </div>
          {/*<!-- /row -->*/}
        </div>
        {/*<!-- /container -->*/}
      </div>
    );
  
}


export default RelatedProds;