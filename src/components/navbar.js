import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.svg'

const Navbar = () =>{
    return(
        <nav className='text-white bg-[#1f1e1ee8] backdrop-blur w-full h-[80px] fixed z-20 flex flex-col justify-center'>
            <div className='flex flex-row justify-between'>
                <div className='pl-32'>
                    <Link to="/">
                        <img src={Logo} alt="logo" className='w-10'/>
                    </Link>
                </div>
                <div className='px-12 flex flex-row justify-evenly'>
                    <Link to="/projects" className='px-8 font-extrabold text-lg'>Projects</Link>
                    <Link to="/work" className='px-8 font-extrabold text-lg'>Work</Link>
                    <Link to="/resume" className='px-8 font-extrabold text-lg'>Resume</Link>
                    <Link to="/contact" className='px-8 font-extrabold text-lg'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;