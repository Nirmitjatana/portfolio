import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className='text-white'>
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/work">work</Link>
            <Link to="/resume">resume</Link>
            <Link to="/contact">contact</Link>
        </nav>
    )
}

export default Navbar;