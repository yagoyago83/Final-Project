 import React from 'react'; 
 import {NavLink} from 'react-router-dom';

 const Navbar = (props) => (
<nav>
    <h2> <NavLink className='logo-link' exact to='/'></NavLink></h2>
            
            <ul className='nav-menu'>
            <li><NavLink className='nav-menu__link' exact to='/'> Home</NavLink></li>
            <li><NavLink className='nav-menu__link' to="/about">About Me</NavLink></li>
            <li><NavLink className='nav-menu__link' to="/resume">Resume</NavLink></li>
            <li><NavLink className='nav-menu__link' to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink className='nav-menu__link' to="/blog">Blog</NavLink></li>
            </ul>
            
            </nav>
    
 );
 export default Navbar;