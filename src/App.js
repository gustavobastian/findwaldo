import React  from 'react';
import HeadFun from './components/header'
import FooterFun from './components/footer'
import GameFun from './components/gameBody'
import './App.css';




function App() {


   
  return (
    <div >
        <HeadFun />        
        <GameFun />
        <FooterFun />     
    </div>
  );
}

export default App;
