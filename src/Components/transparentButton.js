import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TransparentButton = (props) =>{
    let navigate = useNavigate();
    return(
        <>
            <button className='text-white rounded-lg border-white border-2 w-[230px] h-[55px]' onClick={() => {navigate(props.link)}}>{props.text}</button>
        </>
    )
}

TransparentButton.propTypes = {
    text : PropTypes.string,
    link : PropTypes.string
}

export default TransparentButton
