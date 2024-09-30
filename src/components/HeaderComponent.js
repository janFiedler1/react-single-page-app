import React from "react";
import { Link } from "react-router-dom";
import styles from '../component-css/HeaderComponent.css';

function Header() {
    //const links = [{title: 'Home', path:"/home", icon:<HomeIcon/>}]
    const links = [{title: 'Home', path:"/home"},
        {title: 'Home', path:"/home"},
        {title: 'About', path:"/about"},
        {title: 'Contact', path:"/contact"}
     ]
    return (
        <React.Fragment>
            <div className="header">
                <Link className="nav" to='/home'>Home</Link>
                <Link className="nav" to='/about'>About</Link>
                <Link className="nav" to='/contact'>Contact</Link>
            </div>
        </React.Fragment>
    )
}

export default Header;