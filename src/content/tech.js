import React from 'react';
import Footer from '../components/footer'
import Round from '../components/roundlogo';
import Techstack from '../data/techstack.json'

const TechContent = () =>{
    return(
        <div className='flex flex-col justify-between h-screen'>
            <div className='ml-[150px] pt-[160px]'>
                <h1 className='text-white text-4xl font-extrabold'>Tech Stack 🚀</h1>
                <div className='grid grid-cols-6 z-100 mr-24 mt-12 gap-y-8'>
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