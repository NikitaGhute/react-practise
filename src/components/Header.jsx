import React from "react";
import '../../src/components/Style.css'

const Header= ()=>{
    return (
            <header className="top-header">
                <div className="header-logo">
                   <h2>Amazon</h2>
                </div>
                <nav className="nav-style">
                    <ul>
                        <li a href="#home">Home</li>
                        <li a href="#home">Services</li>
                        <li a href="#home">About</li>
                        <li a href="#home">Customer Care</li>
                    </ul>
                </nav>
                <div className="header-btn">
                    <button> Get Started</button>
                </div>
            </header>
    )
};

export default Header;