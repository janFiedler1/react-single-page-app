import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <React.Fragment>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </React.Fragment>
    )
}

export default Header;