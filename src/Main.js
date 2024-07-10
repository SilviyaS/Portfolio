import React from "react";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Project from "./Pages/Project";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// import Resume from "./Pages/Resume";
import { Link } from 'react-router-dom';
// import Home from "./Pages/Home";


const Main = ({ to }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <img src="https://www.shadencodes.com/static/logo-01631bb0a6c3344debf39b20b1603ca1.png" alt="MyPic" width="100" height="75" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            {/* <a class="nav-item nav-link mr-lg-4" href to= "/about">Home</a> */}
            <Link style={{ color: "black" }} to="/">Home</Link>
            <Link style={{ color: "black" }} to="/about">About</Link>
            <Link style={{ color: "black" }} to="/projects">Projects</Link>
            <Link style={{ color: "black" }} to="/blog">Blog</Link>
            <Link style={{ color: "black" }} to="/resume">Resume</Link>
            <Link style={{ color: "black" }} to="/contact">Contact</Link>
            {/* <a class="nav-item nav-link mr-lg-4" href= {`/${to}`} >About</a>
            <a class="nav-item nav-link mr-lg-4" href= {`/${to}`}>Projects</a>
            <a class="nav-item nav-link mr-lg-4" href="http://twitter.com">Resume</a>
            <a class="nav-item nav-link mr-lg-4" href="http://twitter.com">Blog</a>
            <a class="nav-item nav-link mr-lg-4" href="http://twitter.com">Contact</a> */}
          </div>
        </div>
      </nav>

    </>
  )
}
export default Main;

