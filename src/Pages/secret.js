import React from 'react'
import video from '../Assets/delete_soon.mp4'

const Secret = () => {
    // const url = "../Assets/delete_soon.mp4"
  return (
    <div className='pt-40 flex flex-row justify-center text-white'>
        <video width="750" height="500" controls className='outline-none'>
            <source src={video} type="video/mp4"/>
        </video>
    </div>
  )
}
export default Secret
