import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../features/product/cartSlice'

function CheckoutSuccess() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(clearCart())
  },[])



  return (
    <div className='section' style={{textAlign:'center'}}>
      <h2 style={{color:'#D10024'}}>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10mins.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@electro.com</strong>
      </p>
    </div>
  )
}

export default CheckoutSuccess