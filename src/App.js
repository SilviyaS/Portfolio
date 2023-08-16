import './App.css';
import React from "react";
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
 <>
       <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<About />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>    </div>
  );
}

export default App;
