import React from 'react';
import data from '../data/projects.json';
import ProjectCard from '../Components/projectcard'
import Highlight from '../Components/highlight';

const Project = () =>{
    return(
        <div className='lg:pt-[150px] pt-32'>
            <h1 className='text-white pl-11 lg:px-36 text-xl lg:text-4xl font-extrabold'>Projects 💻</h1>
            <h5 className='text-white pl-11 lg:px-36 text-xs lg:text-[16px] mt-6 font-light mr-11'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h5>    
            <div className='ml-8 mr-12 lg:mx-36 mt-8 grid lg:gap-x-16 gap-y-8 grid-cols-1 lg:grid-cols-2'>
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