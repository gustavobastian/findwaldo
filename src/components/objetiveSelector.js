import React from "react";
import '../styles/objetiveSelector.css'
import { useState,useReducer } from "react";


const ObjetiveSelector = (props)=>{    
    let data=props.value.selectorState;
    const updateState= (value)=>{   
        console.log(value)           
      props.getObjetive(value);
      forceupdate();
        
    };
    //for forcing update
    const [ignored,forceupdate]=useReducer(x=>x+1,0);

    return(
        <div>
              {data.hidden === false ? (
                    <select id="objetiveSelector"  className="objetiveSelector" style={{position:"absolute",top:data.y-50,left:data.x}} name="select" defaultValue={0} 
                    onChange={(e)=>{updateState(e.target.value);}}>
                        <option className="optionObjetive" value="0"> </option>
                        <option className="optionObjetive" value="1">Objetive 1</option>
                        <option className="optionObjetive" value="2">Objetive 2</option>
                        <option className="optionObjetive" value="3">Objetive 3</option>
                    </select>
            ) : null}
        </div>
    )

};

export default ObjetiveSelector;