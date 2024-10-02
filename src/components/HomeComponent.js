import React from "react";
//import myImage from 'rockets-shorts-enhanced-png.png';
//<img src={myImage}/>

const pieces = [{title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced-png.png', type: "shorts"},
    {title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced-png.png', type: "shorts"},
    {title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced-png.png', type: "shorts"},
    {title: 'Rockets Shorts', path: process.env.PUBLIC_URL+'/rockets-shorts-enhanced-png.png', type: "shorts"},
 ]

function Home () {
    return (
        <React.Fragment>
            <div className="pieces-container">
                {pieces.map((piece) => (
                    <div className="piece-container">
                        <div>{piece.title}</div>
                        <img src={process.env.PUBLIC_URL + '/rockets-shorts-enhanced-png.png'}/>  
                    </div>
                ))}
            </div>
            <img src={process.env.PUBLIC_URL + '/rockets-shorts-enhanced-png.png'}/>       
        </React.Fragment>
    )
}

export default Home;