import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.users);
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
          <img src="img/profile.jpg" alt="profile-image" />
        </div>

        <div className="col-lg-4 col-md-6  profile-detail">
          <h3>profile informations</h3>
          <h5>Name: {user.name}</h5>
          <h5>role: {user.role}</h5>
          <h5>email:{user.email}</h5>
        </div>
        <div className="col-lg-4 col-md-6  profile-detail">
          <h3>billing Adress</h3>
          <h5>address: </h5>
          <h5>city: </h5>
          <h5>country:</h5>
          <h5>psotaleCode:</h5>
          <h5>telephone:</h5>
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
          <form role="form">

            <h4>update profile informations</h4>
            <div class="form-group ">
              <label htmlfor="name">New Name</label>
              <input
                type="text"
                class="input"
                name="name"
                placeholder="new name"
              />
            </div>

            <div class="form-group ">
              <label htmlFor="email">New Email</label>
              <input
                type="text"
                class="input"
                name="email"
                placeholder="new email"
              />
            </div>
            <div class="form-group ">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="password"
                class="input"
                name="oldPassword"
                placeholder="old password"
              />
            </div>
            <div class="form-group ">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                class="input"
                name="newPassword"
                placeholder="new password"
              />
            </div>
            <button type="submit" class="btn btn-primary ">
               update profile info
             </button>

             </form>
          </div>

          <div className="col-lg-6">
            <h4>update billing adress</h4>

            <form role="form">

            <div class="form-group">
              <label htmlfor="address">New address</label>
              <input
                type="text"
                class="input"
                name="address"
                placeholder="address"
              />
            </div>

            <div class="form-group ">
              <label htmlFor="city">New city</label>
              <input
                type="text"
                class="input"
                name="city"
                placeholder="new city"
              />
            </div>
            <div class="form-group ">
              <label htmlFor="postalCode">New Postale Code</label>
              <input
                type="text"
                class="input"
                name="postalCode"
                placeholder="new postale code"
              />
            </div>
            <div class="form-group ">
              <label htmlFor="telephone">New telephone</label>
              <input
                type="text"
                class="input"
                name="telephone"
                placeholder="new password"
              />
            </div>
            <div class="form-group ">
              <label htmlFor="country">New Country</label>
              <input
                type="text"
                class="input"
                name="country"
                placeholder="new country"
              />
            </div>

             <button type="submit" class="btn btn-primary ">
               update billing address
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

      <div className="row boxing">
        <div class="table-responsive ">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>order</th>
                <th>order</th>
                <th>order</th>
                <th>order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hhhh</td>
                <td>order</td>
                <td>order</td>
                <td>order</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
