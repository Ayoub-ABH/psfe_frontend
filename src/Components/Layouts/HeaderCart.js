import { useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { getTotals } from "../../features/product/cartSlice";

function HeaderCart () {

  const {cartItems,cartTotalQuantity,cartTotalAmount} = useSelector(state=> state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotals())
  },[cartItems])


    return (

      <div className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
          <i className="fa fa-shopping-cart" />
          <span>Your Cart</span>
          <div className="qty">{cartTotalQuantity}</div>
        </a>
        <div className="cart-dropdown">
          <div className="cart-list">

            {cartItems.map(item => 
              
              <div className="product-widget">
              <div className="product-img">
                <img src={`/img/${item.image}`} alt={item.image} />
              </div>
              <div className="product-body">
                <h3 className="product-name">
                    <span>{item.name}</span>
                </h3>
                <h4 className="product-price">
                  <span className="qty">{item.cartQuantity} x</span>Total Price ${item.price * item.cartQuantity}
                </h4>
              </div>
              
            </div>
              
            )}
          </div>
          <div className="cart-summary">
            <small>{cartTotalQuantity} Item(s) selected</small>
            <h5>SUBTOTAL: ${cartTotalAmount}</h5>
          </div>
          <div className="cart-btns">

            <Link to="cart" >View Cart</Link>

            <Link to="/checkout">
            Checkout <i className="fa fa-arrow-circle-right" />
            </Link>
            
          </div>
        </div>
      </div>


    );
  
}


export default HeaderCart