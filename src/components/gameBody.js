import React  from 'react';
import '../styles/gameClass.css'

const gameFun = (props)=>{
    console.log(JSON.stringify(props.value))
    return(
        <div className="gameClass">
          <img className="imageBody" src={require("../images/img"+(parseInt(props.value))+".webp")} alt="not found">           
           </img>
        </div>
    );
};

export default gameFun;