import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main'
import About from './pages/about'
import Error from './pages/errorPage'
import { useState,useReducer } from 'react';
import './App.css';


function App() {
  const [currentGame,setCurrentGame]=useState(1);
  const [ignored,forceupdate]=useReducer(x=>x+1,0);

  const setCurrentGameLocal =(value)=>{
        setCurrentGame(value);
        forceupdate();        
  }
  
  return (
    <BrowserRouter>      
    <Routes>           
    <Route path="/" element={<Main valueCurrent={currentGame} setCurrentGame={(e)=>setCurrentGameLocal(e)}/>} />    
    <Route path="home" element={<Main valueCurrent={currentGame} setCurrentGame={(e)=>setCurrentGameLocal(e)}/>} />    
    <Route path="about" element={<About />} />    
    <Route path="*" element={<Error />} />
    </Routes>  
    </BrowserRouter>  
  );
}

export default App;
