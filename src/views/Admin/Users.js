import React from 'react'
import {Link } from 'react-router-dom'

function Users() {
  return (
    <div className="section mt-80" >


      <div className='row'>
        <div className="col-md-6">
          <div className="section-title">
            <h3 className="title ">Users</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section-title">
            <Link class="btn btn-danger mr-l-btn" to="/admin/users/add" role="button">+Add</Link>
          </div>
        </div>
      </div>

      <div className='row'>
        
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>dddd</th>
                <th>dddddddd</th>
                <th>dddd</th>
                <th>dddd</th>
                <th>ddd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dddd</td>
                <td>dddd</td>
                <td>ddd</td>
                <td>eeeeeeeee</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>

      


    </div>
  )
}

export default Users