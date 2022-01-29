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
        <div className={`text-white fixed ${data.bottom} ${data.right} text-[270px] -z-20`}>
            <h1 className='font-extrabold' style={{
                // "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                "background": "-webkit-linear-gradient( rgba(255, 255, 255, 0.15) 43.73%, rgba(0, 0, 0, 0.0375) 60.73%)",
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent",
                }}>
                Nox
                </h1>
        </div>
        :
        <div className={`text-white fixed ${data.bottom} ${data.right} text-[220px] -z-20`}>
            <h1 className='font-extrabold' style={{
                "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                "background": "-webkit-linear-gradient( rgba(255, 255, 255, 0.15) 43.73%, rgba(0, 0, 0, 0.0375) 60.73%)",
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent",
                }}>
                {data.text}
                </h1>
        </div>

    )
}

Highlight.propTypes = {
    text:PropTypes.oneOf(["Home", "Projects", "Work", "Resume", "Contact"])
} 

export default Highlight