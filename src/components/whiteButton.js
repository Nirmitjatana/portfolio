import React from 'react';
import PropTypes from 'prop-types';

const WhiteButton = (props) => {
    return(
        <>
            <button className='text-white'>{props.text}</button>
        </>
    )
}

WhiteButton.propTypes = {
    text : PropTypes.string
}

export default WhiteButton