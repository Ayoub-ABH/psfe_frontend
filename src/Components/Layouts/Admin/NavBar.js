import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    
    return (
        <div >
            {/*<!-- MAIN HEADER -->*/}
      <div id="admine-header">
        <div className="container">
          <div className="row">
            {/*<!-- LOGO -->*/}
            <div className="col-md-3">
              <div className="header-logo">
                <Link to="/admin" className="logo">
                    <img src="./img/logo.png" alt />
                </Link>
              </div>
            </div>

            {/*<!-- /LOGO -->*/}

            {/*<!-- SEARCH BAR -->*/}
            <div className="col-md-6">
              <div className="header-search">
                <form >
                  <select className="input-select" name="category">
                  <option >allCategories</option>
                    <option >product </option>
                    
                  </select>
                  <input className="input" name="name"  placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>

            {/*<!-- /SEARCH BAR -->*/}

            {/*<!-- ACCOUNT -->*/}
            <div className="col-md-3 clearfix">
              <div className="header-ctn">

              <div class="dropdown">
                  <button
                    class="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <i className="fa fa-user-o" /> Hi, Admin 
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a  className="drd-links-2">
                        <i class="fa fa-sign-out" aria-hidden="true" />
                        logout
                      </a>
                    </li>
                      
                   </ul>
                </div>
                

              </div>
            </div>
            {/*<!-- /ACCOUNT -->*/}
          </div>
        </div>
      </div>
      {/*<!-- /MAIN HEADER -->*/}
        </div>
    )
}

export default NavBar