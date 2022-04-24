import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class  extends Component {
  render() {
    return (
      <div>
       
       <div class="card">

        <div class="card-header">
           Login
        </div>
        <div class="card-body">
            
            <form action="" method="POST" role="form">
                
            
                <div class="form-group mb-2">
                    <label htmlfor="">Email</label>
                    <input type="text" class="input" id="" placeholder="Email"/>
                </div>

                <div class="form-group mb-2">
                    <label htmlFor="">Password</label>
                    <input type="text" class="input" id="" placeholder="password"/>
                </div>
                
            
                <button type="submit" class="btn btn-primary mb-2">Login</button>
                 <div className="mb-1">
                     <a href="">Forgot Password?</a>
                     <Link className="nr-l" to="/register">Not registred</Link>
                </div>
                 
            </form>
            
        </div>


       </div>
       
      </div>
    )
  }
}