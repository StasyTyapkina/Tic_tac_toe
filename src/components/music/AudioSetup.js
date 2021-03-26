import React from "react";

const AudioSetup  = (props) => {

    return(
      <div>
        <div className="music_control">
        <label>
            <i className="fas fa-volume-up"/>
            <input 
                type="range" 
                min='0' 
                max='1' 
                value={props.volume} 
                onChange={props.onChange} 
                step='0.01' />
            <span className="sounds_value">{`${Math.round(props.value * 100)}  %`}</span>
        </label> 
        </div>

       </div>
      
    )
}

export default AudioSetup 