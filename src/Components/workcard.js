import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = (props) =>{
    return(
        <div className='w-full bg-[#2e2e2e] rounded-2xl my-8 flex flex-col lg:flex-row lg:justify-between'>
            <div className='flex flex-col justify-center mx-auto w-48'>
                <img alt="project-preview" src={props.data.img} className=' my-5'></img>
            </div>
            <div className='mb-4 mx-4 lg:mx-0 lg:mr-8 lg:w-3/4'>
                <h1 className='text-white text-xl lg:text-3xl font-semibold my-1 lg:mt-5 lg:mb-3'>{props.data.company}</h1>    
                <h3 className='text-neutral-500 lg:text-sm font-bold'>{props.data.role}</h3>
                <h3 className='text-neutral-500 text-xs lg:text-sm font-bold lg:mt-1'>{props.data.duration}</h3>

                {/* added delimeter logic here */}

                <ul className='text-white list-disc ml-5 mt-3'>
                    {props.data.description.split('. ').map(point => <li key={point} className='lg:text-base text-xs my-2'>{point}</li>)}
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