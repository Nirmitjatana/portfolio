import React from 'react';
import Footer from '../Components/footer'
import Highlight from '../Components/highlight';
import Round from '../Components/roundlogo';
import ContactDetails from '../data/contact.json'

const Contact = () =>{

    return(
        <div className='flex flex-col justify-between h-screen'>
            <div className='lg:ml-[120px] lg:pt-[150px] h-[88vh] ml-11 pt-32'>
                <h1 className='text-white text-xl lg:text-4xl font-extrabold mb-6'>Get in touch 📱</h1>
                <h6 className='text-white text-sm lg:text-xl mt-10'>Primary</h6>
                <div className='flex flex-row'>
                    {
                        ContactDetails.primary.map(list => 
                            <a key={list.link} href={list.link} className='mx-2 lg:mx-6 lg:my-6 my-8' target="_blank" rel="noreferrer">
                                <Round data={list} key={list.link}/>    
                            </a>
                        )
                    }
                </div>
                <h6 className='text-white text-sm lg:text-xl'>Secondary</h6>    
                <div className='flex flex-row flex-wrap w-4/5'>
                    {
                        ContactDetails.secondary.map(list => 
                            <a key={list.link} href={list.link} className='mx-2 lg:mx-6 lg:my-6 my-8' target="_blank" rel="noreferrer">
                                <Round data={list} key={list.link}/>    
                            </a>
                        )
                    }
                </div>
                
            </div>
            <Footer/>
            <Highlight text="Contact"/>
        </div>
    )
}

export default Contact