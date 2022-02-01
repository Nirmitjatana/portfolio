import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.svg'

const Navbar = () =>{

    const [show, setShow] = useState(true);
    const handleClick = () => {
        setShow(show => !show);
    };
    console.log(show)

    return(
        <div>
            <nav className='text-white bg-[#1f1e1ee8] backdrop-blur w-full h-[80px] fixed z-20 flex flex-col justify-center'>
                <div className='flex flex-row justify-between'>
                    <div className=' pl-11 lg:pl-32'>
                        <Link to="/">
                            <img src={Logo} alt="logo" className='w-10'/>
                        </Link>
                    </div>
                    <div className='lg:px-12 lg:flex flex-row justify-evenly hidden'>
                        <Link to="/projects" className='lg:px-8 font-extrabold text-lg'>Projects</Link>
                        <Link to="/work" className='lg:px-8 font-extrabold text-lg'>Work</Link>
                        <Link to="/resume" className='lg:px-8 font-extrabold text-lg'>Resume</Link>
                        <Link to="/contact" className='lg:px-8 font-extrabold text-lg'>Contact</Link>
                    </div>
                    <div className="md:hidden flex items-center mr-9">
                        <button class="outline-none mobile-menu-button" onClick={() => {handleClick()}}>
                            <svg
                                class="w-6 h-6 text-white"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>   
                </div>
                    
            </nav>
            <div className={`bg-[#1f1e1e] top-[80px] h-48 w-48 absolute flex right-0 zeder lg:hidden transition ease-in-out ${ show ? 'hidden' : '' }`}>
                <div className='text-white lg:px-12 flex flex-col justify-evenly text-center mx-auto'>
                    <Link to="/projects" className='lg:px-8 font-extrabold text-lg' onClick={() => {handleClick()}}>Projects</Link>
                    <Link to="/work" className='lg:px-8 font-extrabold text-lg' onClick={() => {handleClick()}}>Work</Link>
                    <Link to="/resume" className='lg:px-8 font-extrabold text-lg' onClick={() => {handleClick()}}>Resume</Link>
                    <Link to="/contact" className='lg:px-8 font-extrabold text-lg' onClick={() => {handleClick()}}>Contact</Link>
                </div> 
            </div>
        </div>
    )
}

export default Navbar;