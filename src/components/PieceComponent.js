import React from "react";
import '../component-css/PieceComponent.css';

/**
 * @param {int} key - unique identifier
 * @param {string} title - name of the piece
 * @param {url} path - path to the image
 * @param {url} payment_link - payment link
 */
function Piece(prop) {
    return (
        <React.Fragment>
            <a href={prop.payment_link}>
                <div key={prop.key} className="piece-container">
                    {/* <div className="piece-title">{prop.title}</div> */}
                    <img src={prop.path}/>  
                </div>
            </a>
        </React.Fragment>
    )
}

export default Piece;