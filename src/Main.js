import React from "react";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";


const Main = ({to}) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
      <img src= "https://www.shadencodes.com/static/logo-01631bb0a6c3344debf39b20b1603ca1.png" alt="MyPic" width="100" height="75" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link mr-lg-4" href= "#">Home</a>
            <a class="nav-item nav-link mr-lg-4" href= {`/${to}`} >About</a>
            <a class="nav-item nav-link mr-lg-4" href= {`/${to}`}>Projects</a>
            <a class="nav-item nav-link mr-lg-4" href="http://twitter.com">Resume</a>
            <a class="nav-item nav-link mr-lg-4" href="http://twitter.com">Blog</a>
            <a class="nav-item nav-link mr-lg-4" href="http://twitter.com">Contact</a>
          </div>
        </div>
      </nav>
     {/* <Home></Home>
     <About></About> */}
     {/* <Blog></Blog> */}
     {/* <Project></Project> */}
     {/* <Contact></Contact> */}
     <Project></Project>
      {/* Footer    */}
      <hr color="black"></hr>
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Created by @Silviyadev, © 2023</span>
    </div>

    <div>
      <a href="https://www.linkedin.com/in/silviya-s-frontenddev/" rel="noreferrer"  target="_blank" class="me-4 text-reset">
      <i class="bi bi-linkedin fa-lg m-3 black-color"></i>  
      </a>
      <a href="https://github.com/SilviyaS"  rel="noreferrer"  target="_blank" class="me-4 text-reset">
      <i class="bi bi-github fa-lg m-3 black-color"></i>
      </a>
      <a href="https://medium.com/@silviyafrontenddev" rel="noreferrer"  target="_blank"  class="me-4 text-reset">
      <i class="bi bi-medium fa-lg m-3 black-color"></i>
            </a>
      <a href="https://twitter.com/20ec_s" rel="noreferrer"  target="_blank" class="me-4 text-reset">
      <i class="bi bi-twitter fa-lg m-3 black-color"></i>
            </a>
      <a href=""  rel="noreferrer"  target="_blank" class="me-4 text-reset">
      <i class="bi bi-envelope fa-lg m-3 black-color"></i>
            </a>
    </div>
  </section>
      </>
  )
}
export default Main;