
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {publicNavbar} from "../utils/NavbarList"
import React from "react"


function Outlet() {
    return null;
}

const PublicLayout = () => {

    return (
        <div>
            <Navbar elements={publicNavbar}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}


export default PublicLayout
