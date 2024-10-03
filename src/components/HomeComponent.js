import React from "react";
import Piece from './PieceComponent';
import '../component-css/HomeComponent.css';
//import myImage from 'rockets-shorts-enhanced-png.png';
//<img src={myImage}/>

const pieces = [{id: 1, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
    {id: 2, title: 'Earth First Longsleeve', path: process.env.PUBLIC_URL+'/earth-first-longsleeve.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
    {id: 3, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced-png.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
    {id: 4, title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced-png.png', type: "shorts", payment_link:"https://buy.stripe.com/test_8wMg2pbRE51r64wfYZ"},
 ]

function Home () {
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

export default Home;