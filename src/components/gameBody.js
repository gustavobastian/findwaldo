import '../styles/gameClass.css'
import ObjetiveSelector from './objetiveSelector';
import { React, useState,useReducer } from 'react';
import Clock from './clock';

const GameFun = (props)=>{
    
    const [begin,setBegin]=useState(false);
    const [timeFinished,setTimeFinished]=useState("");
    
    const [selectorState, setSelectorState]= useState({ //state for saving where is needed to show the objetive selector
        'x':0,
        'y':0,
        'hidden':true,
    });

   
    const [state2,setState2]= useState([    //state for change of opacity of found characters
        1,
        1,
        1,           
    ]);

    const [position,setposition]=useState( //state for saving the current position
        {
            'x':0,
            'y':0,
        })

    const [ignored,forceupdate]=useReducer(x=>x+1,0); //reducer for refreshing after events

    /**only for dev, image 1 */
    const positions=[
        {"x":187 ,"y":182},        
        {"x":302 ,"y":298},
        {"x":120 ,"y":62},
    ]

    const getPoint= (e)=>{    
        if(!e){return;}
        
        let currentPosition=[e.clientX,e.clientY]
        console.log("position x:"+e.clientX)

        setposition({
            'x':currentPosition[0],
            'y':currentPosition[1],
        })

        setSelectorState({
            'x':currentPosition[0],
            'y':currentPosition[1],
            'hidden':false
        })
       
        forceupdate();     
    }
/**
 * Function that checks if the objetive is in the place clicked
 * @param {number} e : objetive indication
 */
    const getObjetive=(e)=>{
        
        setSelectorState({
            'x':0,
            'y':0,
            'hidden':true,
        });
         console.log("Position:"+position.x+" "+position.y)
        if(((Math.abs(position.x-positions[0].x)<10)&&(Math.abs(position.y-positions[0].y)<10))&&(e==='1')){            
            window.alert("1 ok")
            if((state2[2]===0.5)&&(state2[1]===0.5))
            {
                setBegin(false);
                console.log("stoping clock")
                forceupdate();  
                window.alert("game finished!  time: "+timeFinished)                                
            }

            setState2([
                0.5,
                state2[1],
                state2[2],                         
            ])        
        }
        
        if(((Math.abs(position.x-positions[1].x)<10)&&(Math.abs(position.y-positions[1].y)<10))&&(e==='2')){            
            window.alert("2 ok")
            if((state2[0]===0.5)&&(state2[2]===0.5))
            {
                setBegin(false);
                console.log("stoping clock")
                forceupdate();  
                window.alert("game finished!  time: "+timeFinished)                                                
            }

            setState2([
                state2[0],
                0.5,
                state2[2],                         
            ])        
        }
        
        if(((Math.abs(position.x-positions[2].x)<10)&&(Math.abs(position.y-positions[2].y)<10))&&(e==='3')){            
            window.alert("3 ok")
            if((state2[0]===0.5)&&(state2[1]===0.5))
            {
                setBegin(false);
                console.log("stoping clock");
                forceupdate();  
                window.alert("game finished!  time: "+timeFinished);                
                console.log("finishing");                    
            }

            setState2([
                state2[0],
                state2[1],
                0.5,                         
            ])        
        }
        
        forceupdate(); 
    }

    const getTime=(e)=>{
        console.log(JSON.stringify(e));
        setTimeFinished(JSON.stringify(e))
    }

    const start=()=>{
        setBegin(true);
        console.log("starting clock")
        forceupdate();
    }

    
    /**for test */
    const end=()=>{
        setBegin(false);
        console.log("stoping clock")
        forceupdate();
    }

    return(        
        <div className="gameClass">
          <img className="imageBody" src={require("../images/img"+(parseInt(props.value))+".webp")} alt="not found" onClick={(e)=>{getPoint(e);}}>                     
           </img>
           <ObjetiveSelector value={{selectorState}} getObjetive={(e)=>{getObjetive(e)}} />
           <Clock value={begin}  getTime={(e)=>getTime(e)}/>
           <div className='buttonsClock'>
           <button id="buttonStart" className="buttonStart" onClick={start}>Start</button>
           <button id="buttonEnd" className="buttonStart" onClick={end}>End</button>
           </div>
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