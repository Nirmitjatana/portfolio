import React from 'react';
import data from '../data/work.json';
import WorkCard from '../components/workcard'
import Highlight from '../components/highlight';
const Work = () =>{
    return(
        <div className='pt-[150px]'>
            <h1 className='text-white px-36 text-4xl font-extrabold'>Work Experience 💼</h1>
            <h5 className='text-white px-36 text-[16px] mt-6 font-light'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h5>    
            <div className='mx-36 my-8'>
                {
                    data.data.map(
                        data => <WorkCard key={data.company} data={data}/>
                    )
                }
            </div>
            <Highlight text='Work'/>
        </div>
    )
}

export default Work