import React from 'react';
import PropTypes from 'prop-types';

const ProjectsCard = (props) => {
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

ProjectsCard.propTypes = {
    data: PropTypes.shape({
        name:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired, 
        description:PropTypes.string.isRequired
    })
}  

export default ProjectsCard