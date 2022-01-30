import React from 'react';
import HomeContent from '../content/home';
import WhiteButton from '../Components/whiteButton';
import TransparentButton from '../Components/transparentButton';
import AboutContent from '../content/about';
import AchievementsContent from '../content/achievements';
import TechContent from '../content/tech';
import ReactPageScroller from 'react-page-scroller';
import Highlight from '../Components/highlight';


const Home = () => {
    return(
        <div className='overflow-x-hidden'>
            <ReactPageScroller animationTimer={700}>
                <div className='h-screen pt-32 ml-11 lg:pt-[200px] lg:ml-[100px]'>
                    <HomeContent/>
                    <div className='flex-row mt-10 lg:mt-3 inline-block'>
                        <TransparentButton text="Get in touch!" link="/contact"/>
                        {/* <span className=''>.........</span> */}
                        <div className='lg:ml-6 mt-6 inline-block'>
                            <WhiteButton text="Download Resume" link="/resume"/>
                        </div>
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
            <Highlight text="Home"/>
        </div>
    )
}

export default Home