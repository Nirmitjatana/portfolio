import React from 'react';
import PropTypes from 'prop-types';

const TransparentButton = (props) =>{
    return(
        <>
            <button className='text-white'>{props.text}</button>
        </>
    )
}

TransparentButton.propTypes = {
    text : PropTypes.string
}

export default TransparentButton