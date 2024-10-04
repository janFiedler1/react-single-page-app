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
                <div className="logo">
                    <h1>Natural Instinct</h1>
                </div>
                <div className="navigation">
                    {links.map((link) => (
                        <Link className="nav" to={link.path}>{link.title}</Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;