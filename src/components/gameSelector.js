import React from "react";
import '../styles/selector.css'


const Selector = (props)=>{
    

    const updateState= (value)=>{        
        props.setCurrentGame(value);   
        
    };


    return(
        <div>
            <label id="labelGame" htmlFor="select">Game:</label>            
            <select id="gameSelector" className="gameSelector" name="select" defaultValue={props.value} onChange={(e)=>{updateState(e.target.value);}}>
                <option value="1">Game 1</option>
                <option value="2">Game 2</option>
                <option value="3">Game 3</option>
            </select>
        </div>
    )

};

export default Selector;