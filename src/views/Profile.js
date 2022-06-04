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
          <img src={`img/${user.profilePicture}`} alt="profile-image" />
        </div>

        <div className="col-lg-4 col-md-6  profile-detail">
          <h3>profile informations</h3>
          <h5>Name: {user.name}</h5>
          <h5>role: {user.role}</h5>
          <h5>email:{user.email}</h5>
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

            <h4></h4>
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
                <th>ORDER ITEMS</th>
                <th>SHIPPING ADDRESS</th>
                <th>PAYMENT METHOD</th>
                <th>TOTAL PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4 products</td>
                <td>
                    <div style={{ paddingTop: "5px" }}>
                      <p>phone:   0624536478 </p>
                      <p>country: maroc </p>
                      <p>address: Tamgroute</p>
                      <p>postale code:  46000</p>
                      <p>city:  zagora </p>
                    </div>
                </td>
                <td>Card</td>
                <td>
                  $2229.45
                </td>
                <td>
                  <span class="label label-info">pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
