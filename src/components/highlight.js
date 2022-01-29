import React from 'react'

const Highlight = (props) => {
    
    return(
        <div className={`text-white fixed -bottom-32 -right-4 text-[${props.size}px]`}>
            <h1 className='font-extrabold' style={{
                "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                "background": "-webkit-linear-gradient( rgba(255, 255, 255, 0.15) 43.73%, rgba(0, 0, 0, 0.0375) 60.73%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                }}>
                {props.text}
                </h1>
        </div>
    )
}

export default Highlight