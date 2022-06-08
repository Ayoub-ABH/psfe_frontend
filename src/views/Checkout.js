import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addOrder, reset } from "../features/order/orderSlice";

function Checkout() {

  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const {  isError, isSuccess, message } = useSelector(
    (state) => state.orders
  );
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [shippingAddress, setShippingAddress]=useState({
      telephone: "",
      address: "",
      city: "",
      postalCode: "",
      country: ""
  })
  const [order, setOrder] = useState({
    orderItems: cartItems,
    shippingAddress: shippingAddress,
    paymentMethod: "",
    totalPrice: cartTotalAmount
  })

  const handleInput = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]:e.target.value
    })
    setOrder({
      ...order,
      shippingAddress: {
        ...shippingAddress,
        [e.target.name]:e.target.value
      },
      totalPrice: cartTotalAmount
    }) 
  }

  const handleAddorder = (e)=>{
    e.preventDefault()
    dispatch(addOrder(order))
    
  }

  useEffect(()=>{
    if(isError)
    toast.error(message)

    if(isSuccess) 
    navigate("/checkout-success")

    dispatch(reset())
  },[message,isSuccess])

  return (
    <div>
      {/*<!-- SECTION -->*/}
      <div className="section">
        {/*<!-- container -->*/}
        <div className="container">

        

          <div className="row">

            <form onSubmit={handleAddorder}>

            <div className="col-md-7">
                {/*<!-- Billing Details -->*/}
                <div className="billing-details">
                  <div className="section-title">
                    <h3 className="title">shipping Address </h3>
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={handleInput}

                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="country"
                      placeholder="Country"
                      onChange={handleInput}

                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="postalCode"
                      placeholder="ZIP Code"
                      onChange={handleInput}

                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="tel"
                      name="telephone"
                      placeholder="telephone"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                {/*<!-- /Billing Details -->*/}
            </div>
            


            {/*<!-- Order Details -->*/}
            <div className="col-md-5 order-details">
              <div className="section-title text-center">
                <h3 className="title">Your Order</h3>
              </div>
              <div className="order-summary">

                <div className="order-col">
                  <div>
                    <strong>PRODUCT</strong>
                  </div>
                  <div>
                    <strong>TOTAL</strong>
                  </div>
                </div>
                <div className="order-products">
                  {cartItems.map((item) =>

                    <div className="order-col">
                      <div>{item.cartQuantity}x {item.name}</div>
                      <div>${item.price * item.cartQuantity}</div>
                    </div>

                  )}

                </div>
                <div className="order-col">
                  <div>Shiping</div>
                  <div>
                    <strong>FREE</strong>
                  </div>
                </div>
                <div className="order-col">
                  <div>
                    <strong>TOTAL</strong>
                  </div>
                  <div>
                    <strong className="order-total">${cartTotalAmount}</strong>
                  </div>
                </div>
              </div>
              {/* <div className="payment-method">
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-1" />
                    <label htmlFor="payment-1">
                      <span />
                      Direct Bank Transfer
                    </label>
                    <div className="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-2" />
                    <label htmlFor="payment-2">
                      <span />
                      Cheque Payment
                    </label>
                    <div className="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="input-radio">
                    <input type="radio" name="payment" id="payment-3" />
                    <label htmlFor="payment-3">
                      <span />
                      Paypal System
                    </label>
                    <div className="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="input-checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    <span />
                    I've read and accept the{" "}
                    <a href="#">terms &amp; conditions</a>
                  </label>
                </div> */}
              <button type="submit" className="primary-btn order-submit">
                Place order
              </button>
            </div>
            {/*<!-- /Order Details -->*/}

            </form>

        </div>
        
      </div>
    </div>
        {/*<!-- /SECTION -->*/ }
  </div >
);

}


export default Checkout;
