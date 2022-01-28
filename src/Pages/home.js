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
            <h1 className="font-bold text-white">I'm</h1>
            <h1 className="font-extrabold text-white">
                Nirmit Jatana
            </h1>
            <HomeContent/>
            <TransparentButton text="Get in touch!"/>
            <WhiteButton text="Download Resume"/>
            <AboutContent/>
            <AchievementsContent/>
            <TechContent/>
        </>
    )
}

export default Home