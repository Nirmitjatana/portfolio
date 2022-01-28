import React from 'react';
import './App.css';
import Navbar from './components/header'
import Footer from './components/footer'
import Resume from './Pages/resume';
import Project from './Pages/project';
import Contact from './Pages/contact';
import Work from './Pages/work';

function App() {
  return (
    <>
      <Navbar/>
      
      
      <Footer/>
      <Resume/>
      <Project/>
      <Contact/>
      <Work/>
    </>
  );
}

export default App;



// componenets -> content
// pages -> content components
// App -> routing and shit