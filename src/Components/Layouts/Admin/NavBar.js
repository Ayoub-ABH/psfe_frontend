import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    
    return (
        <div >
            {/*<!-- MAIN HEADER -->*/}
      <div id="admine-header">
        <div >
          <div className='row'>
      

            {/*<!-- SEARCH BAR -->*/}
            <div className="col-md-6">
              <div className="admin-search">
                <form >
                  <input className="input" name="search"  placeholder="Search here" />
                </form>
              </div>
            </div>

            {/*<!-- /SEARCH BAR -->*/}

            {/*<!-- ACCOUNT -->*/}
            <div className="col-md-3 clearfix">
              <div className="admin-account">

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