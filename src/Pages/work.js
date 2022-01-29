import React from 'react';
import data from '../data/work.json';
import WorkCard from '../components/workcard'
import Highlight from '../components/highlight';
const Work = () =>{
    return(
        <>
            <h1 className='text-white'>Work Experience 💼</h1>
            <h5 className='text-white'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h5>    
            {
                data.data.map(
                    data => <WorkCard key={data.company} data={data}/>
                )
            }
            <Highlight text='Work'/>
        </>
    )
}

export default Work