import React from 'react';
import '../css/navbar.css';
import easy from "../images/easy.jpg"

const Navbar = () => {
    return ( 
        <div className="nav-div">
            <h1>Reactwork</h1>
            <div className="nav-links-div">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <img src={easy} className="nav-img" alt="nav-img"/>
            </div>
        </div>
     );
}
 
export default Navbar;