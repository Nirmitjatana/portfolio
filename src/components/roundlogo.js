import React from 'react';

const Round = (props) => {
    return(
        <div className='w-32'>
            <div className='bg-white w-32 h-32 rounded-full'>
                <div className='flex flex-row justify-center'>
                    <div className='mt-6'>
                        <img src={props.data.img} alt="stack img" className='w-20'/>
                    </div>
                </div>
            </div>
            <h1 className='text-white font-light mt-1 flex flex-row justify-center'>{props.data.stack}</h1>
        </div>
    )
}

export default Round