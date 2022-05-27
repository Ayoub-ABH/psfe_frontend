import React from 'react'
import { Outlet } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
import Footer from './Footer'
import Header from './Header'

function UserLayouts() {
  return (
    <>
        <Header />
        <BreadCrumb />

        <Outlet />
        
        <Footer />
    </>
  )
}

export default UserLayouts