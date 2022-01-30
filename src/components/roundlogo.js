import React from 'react';

const Round = (props) => {
    return(
        <div className='lg:w-32 w-16'>
            <div className='bg-white w-16 h-16 lg:w-32 lg:h-32 rounded-full'>
                <div className='flex flex-row justify-center'>
                    <div className='lg:mt-6 mt-4'>
                        <img src={props.data.img} alt="stack img" className='lg:w-20 w-9'/>
                    </div>
                </div>
            </div>
            
            {
                props.data.stack ? <h1 className='text-white font-light mt-1 flex flex-row justify-center text-xs'>{props.data.stack}</h1> : <span></span> 
            }
            
        </div>
    )
}

export default Round