import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getMyOrders } from '../../features/order/orderSlice';

const UserOrders = () => {
  const {myOrders,message,isError,isSuccess} = useSelector((state) => state.orders);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(isError)
    toast.error(message)
    dispatch(getMyOrders());
  },[])
  return (
    <div className="row boxing">
    <div class="table-responsive ">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ORDER ITEMS</th>
            <th>SHIPPING ADDRESS</th>
            <th>PAYMENT METHOD</th>
            <th>TOTAL PRICE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>

        {myOrders.map(myOrder =>
          <tr key={myOrder._id}>
            <td>{myOrder.orderItems.length} products</td>
            <td>
                <div style={{ paddingTop: "5px" }}>
                  <p>phone:   {myOrder.shippingAddress.telephone} </p>
                  <p>country: {myOrder.shippingAddress.country} </p>
                  <p>address: {myOrder.shippingAddress.address}</p>
                  <p>postale code:  {myOrder.shippingAddress.postalCode}</p>
                  <p>city: {myOrder.shippingAddress.city}</p>
                </div>
            </td>
            <td>{myOrder.paymentMethod}</td>
            <td>
              ${myOrder.totalPrice}
            </td>
            <td>
              <span class="label label-info">{myOrder.status}</span>
            </td>
          </tr>  
        )}
          
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default UserOrders