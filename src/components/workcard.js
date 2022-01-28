import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = (props) =>{
    return(
        <>
            <img alt="project-preview" src={props.data.img}></img>
            <h1>{props.data.company}</h1>
            <h3>{props.data.role}</h3>
            <h3>{props.data.duration}</h3>

            {/* added delimeter logic here */}

            <ul className='text-white'>
                {props.data.description.split('. ').map(point => <li key={point}>{point}</li>)}
            </ul>
        </>
    )
}

WorkCard.propTypes = {
    data: PropTypes.shape({
        company:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired, 
        description:PropTypes.string.isRequired,
        role:PropTypes.string.isRequired,
        duration:PropTypes.string.isRequired
    })
} 

export default WorkCard