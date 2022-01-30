import React from 'react';
import Data from '../data/achievements.json'
import Link from '../Assets/link.svg'

const AchievementsContent = () => {
    return(
        <div className='lg:ml-[150px] lg:pt-[150px] ml-11 pt-32 mr-11'>
            <h1 className='text-white text-xl lg:text-4xl font-extrabold'>Achievements 🥇</h1>
            <h4 className='text-white text-md lg:text-lg mt-10 font-extralight lg:font-light'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</h4>
            <ul className='text-white list-disc text-[16px] lg:text-xl font-extralight lg:font-light mt-8 lg:ml-12 w-[85vw]'>
                {
                    Data.map(
                        Data => <li className='p-1.5' key={Data.text}>
                                    <div className=''>
                                        <span className="text-white mr-3 inline">
                                            {Data.text}
                                            <a className='text-white opacity-30 ml-2' href={Data.link}>
                                                <img src={Link} alt="link" className='inline'/>
                                            </a>
                                        </span>
                                        
                                    </div>
                                </li>
                                )
                }
            </ul>
        </div>
    )
}

export default AchievementsContent