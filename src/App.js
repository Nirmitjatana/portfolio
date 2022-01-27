import React from 'react';
import './App.css';
import Navbar from './components/header'
import HomeContent from './content/home';
import WhiteButton from './components/whiteButton';
import TransparentButton from './components/transparentButton';
import AboutContent from './content/about';
import AchievementsContent from './content/achievements';
import Footer from './components/footer'
import TechContent from './content/tech'
import Resume from './Pages/resume';

function App() {
  return (
    <>
      <Navbar/>
      <h1 className="font-bold text-white">I'm</h1>
      <h1 className="font-extrabold text-white">
        Nirmit Jatana
      </h1>
      <HomeContent/>
      {/* <WhiteButton/> */}
      <TransparentButton text="Get in touch!"/>
      <WhiteButton text="Download Resume"/>
      <AboutContent/>
      <AchievementsContent/>
      <TechContent/>
      <Footer/>
      <Resume/>
    </>
  );
}

export default App;

// componenets -> content
// pages -> content components
// App -> routing and shit