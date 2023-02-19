import React from 'react'
import '../../style/Header.css'
import {NavBar} from "./NavBar";
export const Header = () => {
    return (
        <>
            <div className="main-header">
                <i className=" main-logo fa fa-shopping-cart" />
                <h3>Online Store</h3>
            </div>
            <NavBar/>
        </>

    )
}
