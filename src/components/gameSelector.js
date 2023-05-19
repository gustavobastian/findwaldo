import React from "react";
import '../styles/selector.css'
import { useState } from "react";

const Selector = (props)=>{

    const [state,setState]=useState(2)


    const updateState= (value)=>{        
        props.setCurrentGame(value);        
    };


    return(
        <div>
            <label for="select">Game:</label>            
            <select className="gameSelector" name="select" onChange={(e)=>{updateState(e.target.value);}}>
                <option value="1" selected>Game 1</option>
                <option value="2">Game 2</option>
                <option value="3">Game 3</option>
            </select>
        </div>
    )

};

export default Selector;