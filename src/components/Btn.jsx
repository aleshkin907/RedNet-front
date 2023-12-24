import React from "react";
import '../styles/Btn.css'

function Btn(props){
    return(
        <button type={props.btnType} className="btn">{props.btnText}</button>
    );
}

export default Btn;