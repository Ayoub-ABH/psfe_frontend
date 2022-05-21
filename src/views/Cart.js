import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/product/cartSlice";

function Cart() {
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotals())
  },[cartItems])

  const HandleDeleteFromCart = (item)=>{
    dispatch(removeFromCart(item))
  }

  const HandleDecreaseCart = (item)=>{
    dispatch(decreaseCart(item))
  }

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
  

  return (
    <div className="section">
      <div className="container">
        {cartItems.map((item) => (
          <div className="row c-product">
            <div className="col-lg-2 ">
              <p className="pro-num">{cartItems.indexOf(item) + 1}</p>
            </div>
            <div className="col-lg-2 c-product-img">
              <img src={`/img/${item.image}`} alt={item.image} />
            </div>
            <div className="col-lg-2 c-product-body ">
              <p>{item.category}</p>
              <h4>
                <Link to={"/product/" + item._id}>{item.name}</Link>
              </h4>
              <h5>
                Total Price ${item.price * item.cartQuantity}
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
              <p>Quantity</p>
              <div>
                <button onClick={()=> HandleDecreaseCart(item)} className="btn btn-primary">-</button>
                <span className="product-quantity">{item.cartQuantity}</span>
                <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">+</button>
              </div>
              <button
                type="button"
                class="btn btn-large btn-block btn-danger mrt"
                onClick={()=> HandleDeleteFromCart(item)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container cart-mounts">
        <div className="row ">
          <div className="col-lg-6 sum-cart">
            <div className="cart-summary">
              <h3>{cartTotalQuantity} Product(s) on the cart</h3>
              <h4>SUBTOTAL: ${cartTotalAmount}</h4>
            </div>
            <div className="cart-btns">
              <button onClick={ ()=>{dispatch(clearCart())}} className="btn btn-danger ">CLEAR CART</button>
              <Link className="btn btn-success nr-l" to="/checkout">
                Checkout <i className="fa fa-arrow-circle-right" />
              </Link>
              <Link className="btn btn-warning nr-l" to="/shop">
                continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
