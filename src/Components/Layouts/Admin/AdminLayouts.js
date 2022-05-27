import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'
import AdminFooter from './AdminFooter'

function AdminLayouts() {
  return (
    <div className='admin-Layout'> 
        <div className="admin-side-bar">
          <SideBar/>
        </div>
        <div className="admin-content">
          <NavBar/>
          <Outlet/>
          <AdminFooter/>
        </div>
    </div>
  )
}

export default AdminLayouts