import '../styles/clock.css'
import { React,useState,useReducer,useEffect } from "react";


const Clock = (props)=>{    
    console.log(props.value)

    const [running, setRunning]=useState(false);

    const [time,setTime]=useState({
            'hour':0,
            'minute':0,
            'seconds':0,
    })
    const [ignored,forceupdate]=useReducer(x=>x+1,0); //reducer for refreshing after events

    const update=()=>{
        let localhour=parseInt(time.hour);
        let localminute=parseInt(time.minute);
        let localsecond=parseInt(time.seconds);
        localsecond++;
        if(localsecond===60){
            localsecond=0;
            localminute++;
        }
        if(localminute===60){
            localminute=0;
            localhour++;
        }


        setTime({
            'hour':localhour,
            'minute':localminute,
            'seconds':localsecond,
        })        
        forceupdate();
    }
    useEffect(()=>  {        
        if(props.value===true){
            setRunning(true);
        }
        else{
            props.getTime(time);
            const interval = setInterval(() => {
                
                setTime({
                    'hour':0,
                    'minute':0,
                    'seconds':0,
                }) 
                
            }, 1000);        
            return () => clearInterval(interval);
                 
        }
        
        if(running===true){
            props.getTime(time);
            const interval = setInterval(() => update(), 1000);        
            return () => clearInterval(interval);
        }
        forceupdate();
    },[props.value,time]);

    return (
        <div className="clockViewer"> {time.hour}:{time.minute}:{time.seconds} </div>
        )
}

export default Clock;