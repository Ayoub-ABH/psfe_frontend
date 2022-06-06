import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Admin() {
  const  {user} = useSelector(state=>state.users)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      toast.error("you should login")
      navigate("/login")
    }else{
      if(user.role !== "admin"){
        toast.error("you should login as an admin")
        navigate("/login")
      }
    }
  },[])
  return (
    <div className="section mt-80">
      <div>
        <div className="col-md-12">
          <div className="section-title">
            <h3 className="title ">Dashboard</h3>
          </div>
        </div>
      </div>

      <div>
        <div className="col-md-3 col-xs-6">
          <div class="alert alert-success" style={{textAlign:'center'}}>
            <p>
              <strong>Total Users</strong>
            </p>
            <p>4</p>
            <p>Stored</p>
          </div>
        </div>

        <div className="col-md-3 col-xs-6">
          <div class="alert alert-info" style={{textAlign:'center'}}>
            <p>
              <strong>Total Products</strong>
            </p>
            <p>12</p>
            <p>Strored</p>
          </div>
        </div>

        <div className="col-md-3 col-xs-6">
          <div class="alert alert-warning" style={{textAlign:'center'}}>
            <p>
              <strong>Total Reviews</strong>
            </p>
            <p>5</p>
            <p>Stored</p>
          </div>
        </div>

        <div className="col-md-3 col-xs-6">
          <div class="alert alert-danger" style={{textAlign:'center'}}>
            <p>
              <strong>Total Orders</strong>
            </p>
            <p>16</p>
            <p>Stored</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;
