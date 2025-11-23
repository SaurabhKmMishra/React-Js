import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// 📌 Outlet Renders the matching child route of a parent route or nothing if no child route matches.

function Layout() { // At many places it is named Route also.
    return (
       <>
        <Header/>
        <Outlet/>
        <Footer/>
       </>
    )
}

// Above in layout we gave an outlet into which using the react-router-dom nesting of components could be done easily.

export default Layout
