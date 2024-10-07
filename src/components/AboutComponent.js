import React from "react";
import '../component-css/PageComponent.css';

function About () {
    return (
        <div className="page">
            <img src={process.env.PUBLIC_URL+'/natural-instinct.jpg'}/>
        </div>
    )
}

export default About;