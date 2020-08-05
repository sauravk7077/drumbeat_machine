import React from "react";

function Screen(props){
    return(
        <input id="screen" readOnly value={props.value}></input>
    )
}

export default Screen;