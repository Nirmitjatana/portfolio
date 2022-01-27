import React from 'react';
import Data from '../data/achievements.json'

const AchievementsContent = () => {
    return(
        <>
            <h1 className='text-white'>Achievements 🥇</h1>
            <h4 className='text-white'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h4>
            <ul className='text-white'>
                {
                    Data.map(
                        Data => <li key={Data.text}>
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
        </>
    )
}

export default AchievementsContent