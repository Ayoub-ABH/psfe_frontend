import { addToCart } from "../../features/product/cartSlice";
import { useDispatch } from 'react-redux';
import Rating from "./Rating";
import { Link } from 'react-router-dom'


function ProductDetail(props) {

  const dispatch = useDispatch()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }

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
                ${props.product.price}{" "}<del className="product-old-price">${props.product.old_price}</del>
              </h3>
              <span className="product-available">
                {
                  props.product.quantity <= 0 ? "Out Of Stock" : "In Stock"
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
              {/* <div className="qty-label">
                Qty
                <div className="input-number">
                  <input type="number" />
                  <span className="qty-up">+</span>
                  <span className="qty-down">-</span>
                </div>
              </div> */}
              <button onClick={()=>handleAddToCart(props.product)} className="add-to-cart-btn">
                <i className="fa fa-shopping-cart" /> add to cart
              </button>
            </div>
            <ul className="product-btns">
              <li>
                <Link to="/">
                  <i className="fa fa-heart-o" /> add to wishlist
                </Link>
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
                <Link to="/">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-google-plus" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-envelope" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*<!-- /Product details -->*/}
      </div>
    );
  
}


export default ProductDetail;