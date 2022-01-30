import React from 'react';

const HomeContent = () =>{
    return(
        <div className='custom-font'>
            <h1 className="font-extrabold text-white lg:text-2xl text-xl mb-6">I'm</h1>
            <h1 className="font-extrabold text-white lg:-ml-[8px] lg:-mt-[20px] mb-12 lg:mb-8 text-7xl lg:text-[140px]">
                Nirmit Jatana
            </h1>
            <div className='lg:w-1/2 mr-11'>
                <span className='text-white font-extrabold text-xl lg:text-2xl'>Software Engineer. </span>
                <span className='text-neutral-500 font-extrabold text-xl lg:text-2xl'>A self-taught developer with an interest in open source and product developement.</span>
                <br/>
            </div>
        </div>
    )
}

export default HomeContent