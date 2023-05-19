import React  from 'react';
import '../styles/gameClass.css'

const gameFun = (props)=>{
    
    return(
        <div className="gameClass">
          <img className="imageBody" src={require("../images/img"+(parseInt(props.value))+".webp")} alt="not found">           
           </img>
           <div className='objetives'>
            <div className="objetive">
                <img className="objetiveImage"  src={require("../images/objetive"+(parseInt(props.value))+"/icon1.png")} alt="not found"></img>
            </div>
            <div className="objetive">
                <img className="objetiveImage"  src={require("../images/objetive"+(parseInt(props.value))+"/icon2.png")} alt="not found"></img>
            </div>
            <div className="objetive">
                <img className="objetiveImage" src={require("../images/objetive"+(parseInt(props.value))+"/icon3.png")} alt="not found"></img>
            </div>
           </div>
        </div>
    );
};

export default gameFun;