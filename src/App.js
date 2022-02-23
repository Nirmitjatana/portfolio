import React from 'react';
import './App.css';
import Resume from './Pages/resume';
import Project from './Pages/project';
import Contact from './Pages/contact';
import Work from './Pages/work';
import Home from './Pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/header'
import Tanu from './Pages/tanu'
import Secret from './Pages/secret'


/*
TODO:
- react router          => done
- proptypes on object   => done
- navbar                => done
- pdf view              => done
- styling
- content

*/

function App() {
  const call = () => {
    window.scrollTo(0,1)
  }
  call()
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
          <Route path='/tanu' element={<Tanu/>} />
          <Route path='/secret' element={<Secret/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
        {/* add pathname logic here */}
      </Router>
    </>
  );
}

export default App;



// componenets -> content
// pages -> content components
// App -> routing and shit