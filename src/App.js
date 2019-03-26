import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Navbar from './components/navbar';
import Home from "./components/home";
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
class App extends Component {
    render() {
        return ( <BrowserRouter >
            <div className = "App" >
            <Navbar title = 'My Portfolio'/>

            <Route exact path = '/'
            render = {
                () => < Home title = 'Me And My Family'/>}/> 
            <Route path = "/about" component = { About }/>
             <Route path = "/resume"component = { Resume }/> 
             <Route path = "/portfolio"component = { Portfolio }/> 
            <Route path = "/blog"
            render = {
                () => < Blog/>
            }
            />

            </div> 
            </BrowserRouter >
        );
    }
}

export default App;