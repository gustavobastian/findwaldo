import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main'
import About from './pages/about'
import Error from './pages/errorPage'
import './App.css';


function App() {
  
  return (
    <BrowserRouter>      
    <Routes>       
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/*" element={<Error />} />
    </Routes>  
    </BrowserRouter>  
  );
}

export default App;
