import React from 'react'
import PropTypes from 'prop-types';

const Highlight = (props) => {
    
    const variations = {
        "Home": {
            "text": "Nox",
            "size": "270",
            "right" : "-right-4",
            "bottom" : "-bottom-36"
        },
        "Projects": {
            "text": "Projects",
            "size": "200",
            "right" : "-right-4",
            "bottom" : "-bottom-28"
        },
        "Work": {
            "text": "Work",
            "size": "220",
            "right" : "-right-4",
            "bottom" : "-bottom-32"
        },
        "Resume": {
            "text": "Resume",
            "size": "200",
            "right" : "-right-4",
            "bottom" : "-bottom-32"
        },
        "Contact": {
            "text": "Contact",
            "size": "200",
            "right" : "-right-4",
            "bottom" : "-bottom-28"
        }       
    }
    const data = variations[props.text]
    return(
        data.text === "Nox" ?
        <div className={`text-white fixed -bottom-24 lg:-bottom-36 -right-4 lg:opacity-80 opacity-50 text-[200px] lg:text-[270px] -z-20`}>
            <h1 className='font-extrabold highlight'>
                Nox
            </h1>
        </div>
        :
        <div className={`text-white fixed lg:text-[200px] lg:-bottom-28 lg:-right-4 -bottom-7 text-[92px] -z-20`}>
            <h1 className='font-extrabold highlight'>
                {data.text}
                </h1>
        </div>

    )
}

Highlight.propTypes = {
    text:PropTypes.oneOf(["Home", "Projects", "Work", "Resume", "Contact"])
} 

export default Highlight