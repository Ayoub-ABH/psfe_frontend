import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Navs from './Navs'

function AdminLayouts() {
  return (
    <>
        <NavBar/>

        <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 navs">
            <Navs/>
        </div>
        <div className="col-lg-6 col-md-6  col-sm-6">
            <Outlet/>
        </div>
        </div>
        
        
        
    </>
  )
}

export default AdminLayouts