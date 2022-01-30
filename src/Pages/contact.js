import React from 'react';
import Footer from '../components/footer'
import Highlight from '../components/highlight';
import Round from '../components/roundlogo';
import ContactDetails from '../data/contact.json'

const Contact = () =>{

    return(
        <div className='flex flex-col justify-between h-screen'>
            <div className='ml-[120px] pt-[150px] h-[88vh]'>
                <h1 className='text-white text-4xl font-extrabold mb-6'>Get in touch 📱</h1>
                <h6 className='text-white text-xl mt-10'>Primary</h6>
                <div className='flex flex-row'>
                    {
                        ContactDetails.primary.map(list => 
                            <a href={list.link} className='mx-6 my-6' target="_blank" rel="noreferrer">
                                <Round data={list} key={list.link}/>    
                            </a>
                        )
                    }
                </div>
                <h6 className='text-white text-xl'>Secondary</h6>    
                <div className='flex flex-row'>
                    {
                        ContactDetails.secondary.map(list => 
                            <a href={list.link} className='mx-6 my-6'>
                                <Round data={list} key={list.link} target="_blank" rel="noreferrer"/>    
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