import React from "react";
import { Link } from "react-router-dom";


function SideBar() {
  const handleClickLink = (e) =>{
    let link=document.querySelector(".admin-link-active")
      link.classList.remove('admin-link-active');
      e.target.classList.add('admin-link-active');
  }
  return (
    <>
      <div className="admin-logo">
            <Link to="/admin" >
                <img src="./img/logo.png" alt />
            </Link>
      </div>
      <div className="admin-navs">
          <ul class="nav nav-pills nav-stacked ">
          <li role="presentation" >
            <Link to="/admin" onClick={handleClickLink} class="admin-link-active">
              <i class="fa fa-tachometer" aria-hidden="true"></i>  Dashboard
            </Link>
          </li>
          <li role="presentation" >
            <Link to="/admin/users" onClick={handleClickLink}>
              <i class="fa fa-users" aria-hidden="true"></i>  Users
            </Link>
          </li>
          <li role="presentation">
            <Link to="/admin/products" onClick={handleClickLink}>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>  Products
            </Link>
          </li>
          <li role="presentation">
            <Link to="/admin/orders" onClick={handleClickLink}>
              <i class="fa fa-book" aria-hidden="true"></i>   Orders
            </Link>
          </li>
          <li role="presentation">
            <Link to="/admin/reviews" onClick={handleClickLink}>
              <i class="fa fa-comments" aria-hidden="true"></i>   Reviews
            </Link>
          </li>
          <li role="presentation">
            <Link to="/admin" onClick={handleClickLink}>
              <i class="fa fa-th-list" aria-hidden="true"></i>  Messages
            </Link>
          </li>
          <li role="presentation">
            <Link to="/admin" onClick={handleClickLink}>
            <i class="fa fa-cogs" aria-hidden="true"></i> Settings
            </Link>
          </li>
        </ul>

      </div>
      
    </>
  )
}

export default SideBar


