import React from "react";

function Screen(props){
    return(
        <input disabled={props.disabled} id="screen" readOnly value={props.value}></input>
    )
}

export default Screen;