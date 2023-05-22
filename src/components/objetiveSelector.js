import React from "react";
import '../styles/objetiveSelector.css'
import { useState,useReducer } from "react";


const ObjetiveSelector = (props)=>{
    
    console.log(JSON.stringify(props.value))
    let data=props.value.selectorState;
    console.log(data.x)
    console.log(data.y)
    console.log(data.hidden)

    const updateState= (value)=>{              
      props.getObjetive(value);
      forceupdate();
        
    };
    //for forcing update
    const [ignored,forceupdate]=useReducer(x=>x+1,0);

    return(
        <div>
              {data.hidden === false ? (
                    <select id="objetiveSelector"  className="objetiveSelector" style={{position:"absolute",top:data.y,left:data.x}} name="select" defaultValue={props.value} 
                    onChange={(e)=>{updateState(e.target.value);}}>
                        <option className="optionObjetive" value="1">Objetive 1</option>
                        <option className="optionObjetive" value="2">Objetive 2</option>
                        <option className="optionObjetive" value="3">Objetive 3</option>
                    </select>
            ) : null}
        </div>
    )

};

export default ObjetiveSelector;