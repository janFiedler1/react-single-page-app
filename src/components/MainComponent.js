import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
//import Contact from './ContactComponent';
import Contact from './GeneratedContactComponent';

import {Routes, Route, Navigate} from 'react-router-dom';

import withRouter from '../react-router-dom/withRouter'

function Main (){
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path='/home' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/contact' Component={Contact}/>
            </Routes>
            
            <Footer/>
        </React.Fragment>
    )
}

export default withRouter(Main)

//<Navigate to='/home'/>