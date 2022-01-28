import React from 'react';
import HomeContent from '../content/home';
import WhiteButton from '../components/whiteButton';
import TransparentButton from '../components/transparentButton';
import AboutContent from '../content/about';
import AchievementsContent from '../content/achievements';
import TechContent from '../content/tech'


const Home = () =>{
    
    return(
        <>
            <div className='h-screen pt-[200px] ml-[100px]'>
                <HomeContent/>
                <div className='flex-row mt-10'>
                    <TransparentButton text="Get in touch!" link="/contact"/>
                    <span className=''>.........</span>
                    <WhiteButton text="Download Resume" link="/resume"/>
                </div>
            </div>
            <div className='h-screen'>
                <AboutContent/>
            </div>
            <div className='h-screen'>
                <AchievementsContent/>
            </div>
            <div className='h-[97vh]'>
                <TechContent/>
            </div>
        </>
    )
}

export default Home