import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Invidualblogpost from './components/Invidualblogpost';
import About from './components/About';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  const {theme}=useContext(ThemeContext);
  return (
    <div className={`App ${theme==="light" ?"light" :"dark"}`}>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/individualblogpost/:id" element={<Invidualblogpost/>}/>
        <Route path="/about/:id" element={<About/>} />
       </Routes>
    </div>
  )
}

export default App
