import React from "react";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <ul class="nav nav-pills nav-stacked admin-nav-links">
      <li role="presentation" class="admin-link-active">
        <Link to="#">
          <i class="fa fa-users" aria-hidden="true"></i>  Users
        </Link>
      </li>
      <li role="presentation">
        <Link to="#">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>  Products
        </Link>
      </li>
      <li role="presentation">
        <Link to="#">
          <i class="fa fa-book" aria-hidden="true"></i>   Orders
        </Link>
      </li>
      <li role="presentation">
        <Link to="#">
          <i class="fa fa-cogs" aria-hidden="true"></i>  Settings
        </Link>
      </li>
      <li role="presentation">
        <Link to="#">
          <i class="fa fa-th-list" aria-hidden="true"></i>  Reviews
        </Link>
      </li>
      <li role="presentation">
        <Link to="#">
          <i class="fa fa-comments" aria-hidden="true"></i>  Messages
        </Link>
      </li>
    </ul>
  );
}

export default Navs;
