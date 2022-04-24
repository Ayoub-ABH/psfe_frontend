import React, { Component } from "react";
import Aside from "../Components/Shop/Aside";
import Store from "../Components/Shop/Store";

export default class Shop extends Component {
  
  render() {
    return (
      <div>
        {/*<!-- SECTION --> */}
        <div className="section">
          {/*<!-- container --> */}
          <div className="container">
            {/*<!-- row --> */}
            <div className="row">
              <Aside />
              <Store />
            </div>
            {/* <!-- /row -->*/}
          </div>
          {/*<!-- /container --> */}
        </div>
        {/* <!-- /SECTION -->*/}
      </div>
    );
  }
}
