import './App.css';
import React from "react";
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Blog from './Pages/Blog';
import Footer from './Pages/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <>
      <Main></Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Projects" element={<Project />} />
        </Routes>
        <Footer></Footer>
      </>    </div>
  );
}

export default App;
