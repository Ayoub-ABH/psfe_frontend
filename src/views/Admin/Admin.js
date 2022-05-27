import React from "react";

function Admin() {
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
          <div class="alert alert-success">
            <p>
              <strong>Total Users</strong>
            </p>
            <p>Alert body ...</p>
            <p>to the moon</p>
          </div>
        </div>

        <div className="col-md-3 col-xs-6">
          <div class="alert alert-info">
            <p>
              <strong>Total Products</strong>
            </p>
            <p>30</p>
            <p>to the moon</p>
          </div>
        </div>

        <div className="col-md-3 col-xs-6">
          <div class="alert alert-warning">
            <p>
              <strong>Total Reviews</strong>
            </p>
            <p>90</p>
            <p>to the moon</p>
          </div>
        </div>

        <div className="col-md-3 col-xs-6">
          <div class="alert alert-danger">
            <p>
              <strong>Total Orders</strong>
            </p>
            <p>100</p>
            <p>to the moon</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;
