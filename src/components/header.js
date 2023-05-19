import React  from 'react';
import '../styles/header.css'
import Selector from './gameSelector'

const headFun = (props)=>{
    return(
        <div className="headerClass">
            <div id="selectingGame" ><Selector value={props.value} setCurrentGame={(e)=>{props.setCurrentGame(e)}}/></div>
            <div id="toMainPage"><a className='aHeader' href='/'>Find Waldo Game!</a></div>
            <div id="toAboutPage"> <a className='aHeader'  href='/about'>About</a></div>
        </div>
    );
};

export default headFun;