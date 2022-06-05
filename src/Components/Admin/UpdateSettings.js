import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, updateSettings } from '../../features/settings/settingsSlice'

const UpdateSettings = () => {
  const {id} = useParams()
  const [setting,setSettings] = useState({
    phone:"",
    email:"",
    address:""
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isError,isSuccess,message} = useSelector(state => state.settings )

  const handleInput = (e)=>{
    setSettings({
      ...setting,
      [e.target.name]:e.target.value
    })
  }

  useEffect(()=>{
    if(isError)
    toast.error(message)

    if(isSuccess) {
      toast.success(message)
      navigate("/admin/settings")
    }

    dispatch(reset())
  },[message])


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data={idSettings:id,settings:setting}
    dispatch(updateSettings(data))
  };
  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Update Settings</h3>
      </div>

      <div className="admin-user-form">
        <form onSubmit={onSubmitHandler}>

          <div className="form-group">
            
            <label>phone</label>
            <input
              className="input"
              type="text"
              name="phone"
              placeholder="phone"
              onChange={handleInput}
            />
          </div>
          
          
          <div className="form-group">
          <label>Email</label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
          <label>Address</label>
            <input
              className="input"
              type="text"
              name="address"
              placeholder="address"
              onChange={handleInput}
            />
          </div>

          
         

          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateSettings