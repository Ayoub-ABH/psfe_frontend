import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, updateOrderStatus } from '../../features/order/orderSlice'

const UpdateOrder = () => {

  const [status,setStatus] = useState("pending")
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isError,isSuccess,message} = useSelector(state => state.orders )


  useEffect(()=>{
    if(isError)
    toast.error(message)

    if(isSuccess) {
      toast.success(message)
      navigate("/admin/orders")
    }

    dispatch(reset())
  },[message])


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const orderData = {idOrder:id,status:status}
    dispatch(updateOrderStatus(orderData))
  };



  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Update Order</h3>
      </div>

      <div className="admin-user-form">
        <form onSubmit={onSubmitHandler}>
          
          <div class="form-group">
          <label>Status</label>
              <select name="role" class="input" value={status} onChange={(e) =>{setStatus(e.target.value)}}>
                <option value="pending">Pending</option>
                <option value="validated">Validated</option>
                <option value="delivered">Delivered</option>
                <option value="canceled">Canceled</option>
              </select>
          </div>
          
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateOrder