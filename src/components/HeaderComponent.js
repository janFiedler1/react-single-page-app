import React from "react";
import { Link } from "react-router-dom";
import '../component-css/HeaderComponent.css';

function Header() {
    const links = [{title: 'Home', path:"/home"},
        {title: 'About', path:"/about"},
        {title: 'Contact', path:"/contact"}
     ]
    return (
        <React.Fragment>
            <div className="header">
                <h1 className="logo-word">NATURAL INSTINCT</h1>
                <div className="navigation-menu">
                    {links.map((link) => (
                        <Link className="navigation-item" to={link.path}>{link.title}</Link>
                    ))}
                </div>
                <button className="navigation-dropdown">| | |</button>
            </div>
        </React.Fragment>
    )
}

export default Header;