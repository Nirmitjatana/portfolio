import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const WhiteButton = (props) => {
    let navigate = useNavigate();

    return(
        <>
            {
            props.download ?
            <button className='text-black rounded-lg w-[230px] h-[55px] border-white border-2 bg-white'>
                <a href={props.download} download>{props.text}</a>
            </button>
            : 
            <button className='text-black rounded-lg w-[230px] h-[55px] border-white border-2 bg-white' onClick={() => {navigate(props.link)}}>{props.text}</button>}
        </>
    )
}

WhiteButton.propTypes = {
    text : PropTypes.string.isRequired,
    link : PropTypes.string,
    download: PropTypes.string
}

export default WhiteButton