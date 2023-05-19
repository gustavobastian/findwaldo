import React from "react";
import '../styles/selector.css'
import { useState } from "react";

const Selector = (props)=>{

    const [state,setState]=useState(2)


    const updateState= (value)=>{
        console.log(value);
    };


    return(
        <div>
            <label for="select">Game:</label>            
            <select className="gameSelector" name="select">
                <option value="value1" selected>Game 1</option>
                <option value="value2">Game 2</option>
                <option value="value3">Game 3</option>
            </select>
        </div>
    )

};

export default Selector;