import React  from 'react';
import '../styles/header.css'
import Selector from './gameSelector'
import { Link } from 'react-router-dom';

const headFun = (props)=>{
    console.log("Height:"+window.innerHeight);
    console.log("Width:"+window.innerWidth);
    return(
        
        <div className="headerClass">
            <div id="selectingGame" ><Selector value={props.value} setCurrentGame={(e)=>{props.setCurrentGame(e)}}/></div>
            <div id="toMainPage"><Link className='aHeader' to='/home'>Find Waldo Game!</Link></div>
            <div id="toAboutPage"> <Link className='aHeader'  to='/about'>About</Link></div>
        </div>
    );
};

export default headFun;