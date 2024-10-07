import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import About from './AboutComponent';
import Home from './HomeComponent';
import Page from './PageComponent';
import Contact from './GeneratedContactComponent';
import NoPageFound from './NoPageFound';

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
                <Route path="*" element={NoPageFound} />
            </Routes>
            
            <Footer/>
        </React.Fragment>
    )
}
export default withRouter(Main)