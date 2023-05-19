import React  from 'react';
import '../styles/header.css'
import Selector from './gameSelector'

const headFun = (props)=>{
    return(
        <div className="headerClass">
            <div id="selectingGame" ><Selector setCurrentGame={(e)=>{props.setCurrentGame(e)}}/></div>
            <div id="toMainPage"><a href='/'>Find Wally Game!</a></div>
            <div id="toAboutPage"> <a href='/about'>About</a></div>
        </div>
    );
};

export default headFun;