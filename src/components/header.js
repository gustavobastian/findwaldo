import React  from 'react';
import '../styles/header.css'
import Selector from './gameSelector'

const headFun = (props)=>{
    return(
        <div className="headerClass">
            <div><Selector /></div>
            <div><a href='/'>Find Wally Game!</a></div>
            <div> <a href='/about'>About</a></div>
        </div>
    );
};

export default headFun;