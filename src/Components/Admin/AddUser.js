import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, reset } from "../../features/user/userSlice";


const AddUser = () => {
  const [fileData, setFileData] = useState();
  const [user,setUser] = useState({
    name:"",
    role:"user",
    email:"",
    password:""
  });
  const disptach = useDispatch()
  const navigate = useNavigate()
  const {isError,isSuccess,message}=useSelector(state => state.users)

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };
  const handleInput = (e)=> {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  
  useEffect(()=>{
      if(isError)
      toast.error(message)

      if(isSuccess) {
        toast.success(message)
        navigate("/admin/users")
      }

      disptach(reset())
  },[message])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data ={fileData,user}
    disptach(addUser(data))
  };

  return (
    <div className="section mt-80">
      <div className="section-title admin-user-form">
        <h3 className="title">Add User</h3>
      </div>

      <div className="admin-user-form">
        <form onSubmit={onSubmitHandler}>

          <div className="form-group">
            
            <label>Name</label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="name"
              onChange={handleInput}
            />
          </div>
          
          <div class="form-group">
          <label>Role</label>
              <select name="role" class="input"  onChange={handleInput}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
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
          <label>Password</label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
          <label>Image</label>
            <input
              type="file"
              name="image"
              onChange={fileChangeHandler}
            />
          </div>
         

          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
