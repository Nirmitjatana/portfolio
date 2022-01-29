import React from 'react';
import HomeContent from '../content/home';
import WhiteButton from '../components/whiteButton';
import TransparentButton from '../components/transparentButton';
import AboutContent from '../content/about';
import AchievementsContent from '../content/achievements';
import TechContent from '../content/tech';
import ReactPageScroller from 'react-page-scroller';


const Home = () => {
    return(
        <div className='overflow-x-hidden'>
            <ReactPageScroller animationTimer={700}>
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
                <div className='h-screen'>
                    <TechContent/>
                </div>
            </ReactPageScroller>
        </div>
    )
}

export default Home