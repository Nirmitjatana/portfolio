import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className='text-white bg-[#252525de] backdrop-blur w-full h-[80px] fixed'>
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/work">work</Link>
            <Link to="/resume">resume</Link>
            <Link to="/contact">contact</Link>
        </nav>
    )
}

export default Navbar;