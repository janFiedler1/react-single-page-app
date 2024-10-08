import React from "react";
import '../component-css/PageComponent.css';
import Modal from "./PieceModalComponent"

function About () {
    return (
        <React.Fragment>
            <div className="page">
                <img src={process.env.PUBLIC_URL+'/natural-instinct.jpg'}/>
            </div>
            <Modal/>
        </React.Fragment>
    )
}

export default About;