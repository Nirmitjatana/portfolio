import React from 'react';
import data from '../data/projects.json';
import ProjectCard from '../components/projectcard'
import Highlight from '../components/highlight';

const Project = () =>{
    return(
        <div className='pt-[150px]'>
            <h1 className='text-white px-36 text-4xl font-extrabold'>Projects 💻</h1>
            <h5 className='text-white px-36 text-[16px] mt-6 font-light'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h5>    
            <div className=' mx-36 mt-8 grid gap-x-16 gap-y-8 grid-cols-2'>
                {
                    data.map(
                        data => <ProjectCard key={data.name} data={data}/>
                    )
                }   
            </div>
            <Highlight text='Projects'/>
        </div>
    )
}

export default Project