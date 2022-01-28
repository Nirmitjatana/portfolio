import React from 'react';
import './App.css';
import Navbar from './components/header'
import Footer from './components/footer'
import Resume from './Pages/resume';
import Project from './Pages/project';
import Contact from './Pages/contact';
import Work from './Pages/work';
import Home from './Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/*
TODO:
- react router
- proptypes on object
- navbar
- pdf view

*/

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Home/>} />

        </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;



// componenets -> content
// pages -> content components
// App -> routing and shit