import React from "react";
import '../component-css/PieceComponent.css';

function Piece(prop) {
    return (
        <React.Fragment>
            
            <div key={prop.key} className="piece-container">
                <div>{prop.title}</div>
                <img src={prop.path}/>  
            </div>
        </React.Fragment>
    )
}

export default Piece;