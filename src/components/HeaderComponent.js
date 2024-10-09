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
            <div className="header sticky-header">
                <a href="/home">
                    <h1 className="logo-word">NATURAL INSTINCT</h1>
                </a>
                <div className="navigation-menu">
                    {links.map((link) => (
                        <Link to={link.path}>
                            <button className="navigation-item" >
                                {link.title}
                            </button>
                        </Link>
                    ))}
                </div>
                <button className="navigation-dropdown">| | |</button>
            </div>
        </React.Fragment>
    )
}

export default Header;