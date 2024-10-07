import React from "react";
import PieceGrid from './PieceGridComponent';
import '../component-css/HomeComponent.css';
import '../component-css/PageComponent.css';

function Home () {
    return (
        <React.Fragment>
            <PieceGrid className="page"/> 
        </React.Fragment>
    )
}

export default Home;