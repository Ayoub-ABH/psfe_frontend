import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
        <nav id="navigation">
            <div className="container">
                {/* <!-- responsive-nav -->*/}
                <div id="responsive-nav">
                {/*<!-- NAV -->*/} 
                    <ul class="main-nav nav navbar-nav">
                        <li ><Link to="/">Home</Link></li>
                        <li><Link to="shop">Shop</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to="About">About</Link></li>
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="register">Register</Link></li>
                    </ul>
                    {/*<!-- /NAV -->*/}
                </div>
                {/*<!-- /responsive-nav --> */}
            </div>
        </nav>
    )
  }
}
