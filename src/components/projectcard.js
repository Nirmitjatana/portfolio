import React from 'react';
import PropTypes from 'prop-types';
import akina from '../Assets/projects/akina.svg'
import Github from '../Assets/github.svg'
import Figma from '../Assets/figma.svg'
import Link from '../Assets/link.svg'

const ProjectsCard = (props) => {
    
    return(
        <div className='w-2/5 bg-[#363636] rounded-2xl m-3'>
            <img src={ akina } alt="project-preview"></img>
            <div className='flex flex-row justify-between'>
                <h1 className='text-white font-bold mx-6 my-3 text-xl'>{props.data.name}</h1>
                <div className='flex flex-row mx-6 my-3'>
                    {
                        props.data.links.figma.length > 0 ? <span className='px-1 pt-[3px]'>
                            <a href={props.data.links.figma} target="_blank" rel="noreferrer">
                                <img src={Figma} alt="figma" className='w-3'/>
                            </a>
                        </span> : <span></span> 
                    }
                    
                    {
                        props.data.links.github.length > 0 ? <span className='px-2'>
                            <a href={props.data.links.github} target="_blank" rel="noreferrer">
                                <img src={Github} alt="figma" className='w-6'/>
                            </a>
                        </span> : <span></span> 
                    }

                    {
                        props.data.links.url.length > 0 ? <span className='pt-[2px]'>
                            <a href={props.data.links.url} target="_blank" rel="noreferrer">
                                <img src={Link} alt="figma" className='w-5'/>
                            </a>
                        </span> : <span></span> 
                    }
                </div>
            </div>
            <div className='text-white text-xs font-light mx-6 pb-5'>
                I love building projects and practice my engineering skills, here's an archive of things that I've worked on.
            </div>
        </div>
    )
}

ProjectsCard.propTypes = {
    data: PropTypes.shape({
        name:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired, 
        description:PropTypes.string.isRequired
    })
}  

export default ProjectsCard