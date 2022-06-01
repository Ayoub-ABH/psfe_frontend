import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../features/user/userSlice';

function NavBar() {
   const { user } = useSelector((state) => state.users);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const onLogout = ()=>{
    dispatch(logout())
    navigate('/')
  }
    
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

              {user ? (
                <div class="dropdown">
                  <button
                    class="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <i className="fa fa-user-o" /> Hi, {user.name}   
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a onClick={onLogout} className="drd-links-2">
                        <i class="fa fa-sign-out" aria-hidden="true" />
                        logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
                

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