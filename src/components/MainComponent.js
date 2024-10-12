import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './GeneratedContactComponent';
import NoPageFound from './NoPageFound';

import {Routes, Route, HashRouter} from 'react-router-dom';

import withRouter from '../react-router-dom/withRouter'

function Main (){
    // let envt;
    // console.log(process.env.PUBLIC_URL);
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV == "production") {
    //     envt = window.location.href;
    //     console.log("I set it!");
    // }
    // else {
    //     envt = "";
    //     console.log("I didn't set it!");
    // }
    return (
        <React.Fragment>
            <Header/>
            <Routes>
            {/* {console.log(envt+'/home')}  */}
                <Route path='/home' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/contact' Component={Contact}/>
                <Route path="*" element={NoPageFound} />
            </Routes>
            
            <Footer/>
        </React.Fragment>
    )
}
export default withRouter(Main)