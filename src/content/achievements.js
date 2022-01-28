import React from 'react';
import Data from '../data/achievements.json'

const AchievementsContent = () => {
    return(
        <div className='ml-[150px] pt-[150px]'>
            <h1 className='text-white text-4xl font-extrabold'>Achievements 🥇</h1>
            <h4 className='text-white text-[20px] mt-10 font-light'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h4>
            <ul className='text-white list-disc text-xl font-light mt-8 ml-12'>
                {
                    Data.map(
                        Data => <li className='p-2' key={Data.text}>
                                    <span className="text-white">
                                        {Data.text}
                                    </span>
                                    <a className='text-white' href={Data.link}>
                                        link
                                    </a>
                                </li>
                                )
                }
            </ul>
        </div>
    )
}

export default AchievementsContent