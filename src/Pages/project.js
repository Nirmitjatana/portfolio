import React from 'react';
import data from '../data/projects.json';
import ProjectCard from '../components/projectcard'

const Project = () =>{
    return(
        <>
            <h1 className='text-white'>Projects 💻</h1>
            <h5 className='text-white'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h5>    
            {
                data.map(
                    data => <ProjectCard key={data.name} data={data}/>
                )
            }
        </>
    )
}

export default Project