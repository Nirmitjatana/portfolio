import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const WhiteButton = (props) => {
    let navigate = useNavigate();
    return(
        <>
            <button className='text-white' onClick={() => {navigate(props.link)}}>{props.text}</button>
        </>
    )
}

WhiteButton.propTypes = {
    text : PropTypes.string
}

export default WhiteButton