import React from 'react'
import { Outlet } from 'react-router'

import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import Home from './components/Pages/home'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout