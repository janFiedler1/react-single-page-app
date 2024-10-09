import React from "react";
import Piece from './PieceComponent';
import '../component-css/PieceGridComponent.css';

const pieces = [{id: 1, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
    {id: 2, title: 'Earth First Longsleeve', path: process.env.PUBLIC_URL+'/earth-first-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
    {id: 3, title: 'Give Me Space Longsleeve', path: process.env.PUBLIC_URL+'/give-me-space-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
    {id: 4, title: 'Yin Yang Longsleeve', path: process.env.PUBLIC_URL+'/no-light-longsleeve.png', type: "longsleeve", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
 ]

function PieceGrid () {
    return (
        <React.Fragment>
            <div className="pieces-container">
                {pieces.map((piece) => (
                    <Piece key={piece.key} title={piece.title} path={piece.path} payment_link={piece.payment_link}/>
                ))}
            </div>    
        </React.Fragment>
    )
}

export default PieceGrid;