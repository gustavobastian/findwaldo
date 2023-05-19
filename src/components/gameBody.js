import React  from 'react';
import '../styles/gameClass.css'
import { useState,useReducer } from 'react';

const GameFun = (props)=>{
   
    const [state2,setState2]= useState([
        1,
        1,
        1,           
    ]);
    const [ignored,forceupdate]=useReducer(x=>x+1,0);
    /**only for dev, image 1 */
    const positions=[
        {"x":189 ,"y":185},        
        {"x":302 ,"y":298},
        {"x":120 ,"y":62},
    ]

    const getPoint= (e)=>{    
        
        if(!e){return;}
        
        let currentPosition=[e.clientX,e.clientY]
        console.log("state:"+JSON.stringify(state2))
        console.log("state:"+JSON.stringify(state2[0]))
        
        if((Math.abs(currentPosition[0]-positions[0].x)<10)&&(Math.abs(currentPosition[1]-positions[0].y)<10)){
            console.log("1 ok")
            setState2([
                0.5,
                state2[1],
                state2[2],                         
            ])        
            forceupdate(); 
            
        }
        
        if((Math.abs(currentPosition[0]-positions[1].x)<10)&&(Math.abs(currentPosition[1]-positions[1].y)<10)){
            console.log(" 2 ok")

            setState2([
                state2[0],
                0.5,
                state2[2],                         
            ])        
        
            
        
        }
        
        if((Math.abs(currentPosition[0]-positions[2].x)<10)&&(Math.abs(currentPosition[1]-positions[2].y)<10)){
            console.log(" 3 ok")

            setState2([
                state2[0],
                state2[1],
                0.5,                         
            ])        
            forceupdate();     
            
        }
    }

    return(
        <div className="gameClass">
          <img className="imageBody" src={require("../images/img"+(parseInt(props.value))+".webp")} alt="not found" onClick={(e)=>{getPoint(e);}}>           
           </img>
           <div className='objetives'>
                <div className="targetName">Objetive 1</div>
                <div className="objetive"  style={{opacity: state2[0]}}>                
                    <img className="objetiveImage" src={require("../images/objetive"+(parseInt(props.value))+"/icon1.png")} alt="not found"></img>
                </div>
                <div className="targetName">Objetive 2</div>
                <div className="objetive" style={{opacity: state2[1]}} >            
                    <img   className="objetiveImage"  src={require("../images/objetive"+(parseInt(props.value))+"/icon2.png")} alt="not found"></img>
                </div>
                <div className="targetName">Objetive 3</div>
                <div className="objetive" style={{opacity: state2[2]}}>                
                    <img  className="objetiveImage" src={require("../images/objetive"+(parseInt(props.value))+"/icon3.png")} alt="not found"></img>
                </div>
           </div>
        </div>
    );
};

export default GameFun;