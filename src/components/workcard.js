import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = (props) =>{
    return(
        <div className='w-full bg-[#2e2e2e] rounded-2xl my-8 flex flex-row justify-between '>
            <img alt="project-preview" src={props.data.img} className='flex flex-col justify-center w-40 mx-auto'></img>
            <div className='mt-3 mb-4 mr-8 w-3/4'>
                <h1 className='text-white text-2xl font-semibold my-2'>{props.data.company}</h1>
                <h3 className='text-neutral-500 text-sm font-bold'>{props.data.role}</h3>
                <h3 className='text-neutral-500 text-sm font-bold mt-1'>{props.data.duration}</h3>

                {/* added delimeter logic here */}

                <ul className='text-white list-disc ml-5 mt-3'>
                    {props.data.description.split('. ').map(point => <li key={point}>{point}</li>)}
                </ul>
            </div>
        </div>
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