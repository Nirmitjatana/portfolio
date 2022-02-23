import React from 'react'
import ReactPlayer from 'react-player'

const Secret = () => {
    // const url =""
  return (
    <div className='pt-40 flex flex-row justify-center text-white'>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=jdgih_9alZA"
            controls
            playbackRate = {1}
            width = "896px"
            height = "504px"
        />
    </div>
  )
}
export default Secret
