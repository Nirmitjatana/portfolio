import React from 'react';

const ProjectsCard = (props) =>{
    return(
        <>
            <img alt="project-preview" src={props.data.img}></img>
            <h1>{props.data.name}</h1>
            <div>
                {
                    props.data.links.figma.length > 0 ? <span>
                        Figma
                    </span> : <span></span> 
                }
                
                {
                    props.data.links.github.length > 0 ? <span>
                        GitHub
                    </span> : <span></span> 
                }

                {
                    props.data.links.url.length > 0 ? <span>
                        URL
                    </span> : <span></span> 
                }
            </div>
            <div>
                description
            </div>
        </>
    )
}

export default ProjectsCard