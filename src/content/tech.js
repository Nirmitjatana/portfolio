import React from 'react';
import Footer from '../components/footer'
import Round from '../components/roundlogo';
import Techstack from '../data/techstack.json'

const TechContent = () =>{
    return(
        <div className='flex flex-col justify-between h-screen'>
            <div className='ml-11 pt-32 lg:ml-[150px] lg:pt-[160px]'>
                <h1 className='text-white text-xl lg:text-4xl font-extrabold'>Tech Stack 🚀</h1>
                <div className='grid lg:grid-cols-6 z-100 mr-24 mt-20 lg:mt-12 lg:gap-y-8 lg:gap-x-2 gap-y-16 gap-x-20 grid-cols-4'>
                    {
                        Techstack.map((
                            data => <Round data={data} key={data.stack}
                        />))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TechContent