import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserOrders from "../Components/Profile/UserOrders";
import { reset, updateUserProfile } from "../features/user/userSlice";

function Profile() {
  const { user } = useSelector((state) => state.users);
  const [userInfo,setUserInfo] = useState({
    id:user._id,
    name:"",
    email:"",
    password:""
  })
  const [fileData, setFileData] = useState();
  const dispatch = useDispatch()
  const {isError,message,isSuccess} = useSelector(state=>state.users)


  useEffect(()=>{
 
    if(isSuccess){
      toast.success(message)
    }

    if(isError) 
    toast.error(message)
    
    dispatch(reset())
  },[message])



  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleInput = (e)=>{
    setUserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data ={fileData,userInfo}
    dispatch(updateUserProfile(data))
  };


  return (
    <div className="section container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h3 className="title color-red">Profile</h3>
          </div>
        </div>
      </div>

      <div className="row boxing" style={{ marginBottom: "25px" }}>
        <div className="col-lg-3 col-md-3 product-preview ">
          <img src={`img/${user.profilePicture}`} alt="profile-image" />
        </div>

        <div className="col-lg-4 col-md-6  profile-detail">
          <h3>profile informations</h3>
          <div className="profile-info">
            <strong className="profile-title">Name: </strong> <h5>{user.name}</h5>
            <strong className="profile-title">Role:</strong> <h5> {user.role}</h5>
            <strong className="profile-title">Email:</strong><h5>{user.email}</h5>
          </div>
          
        </div>

      </div>

      <div className="row ">
        <div className="col-md-12">
          <div className="section-title ">
            <h3 className="title color-red">Update Profile</h3>
          </div>
        </div>
      </div>

      <div className="row boxing" style={{ marginBottom: "25px" }}>

        <div className="col-lg-6">
          <form role="form" onSubmit={onSubmitHandler}>

            <div class="form-group ">
              <label htmlfor="name">New Name</label>
              <input
                type="text"
                class="input"
                name="name"
                placeholder="new name"
                onChange={handleInput}
              />
            </div>

            <div class="form-group ">
              <label htmlFor="email">New Email</label>
              <input
                type="text"
                class="input"
                name="email"
                placeholder="new email"
                onChange={handleInput}
              />
            </div>
            <div class="form-group ">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                class="input"
                name="password"
                placeholder="new password"
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

          <button type="submit" class="btn btn-primary ">
            update profile info
          </button>

          </form>

        </div>



      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h3 className="title color-red">Your orders</h3>
          </div>
        </div>
      </div>

      <UserOrders/>
    </div>
  );
}

export default Profile;
