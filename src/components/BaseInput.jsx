import React from "react";
import '../styles/BaseInput.css';

function BaseInput(props) {
    return(
        <div className="base_input">
            <label class="base_input-label">
                {props.inputLabel}
            </label>
            <input type={props.inputType} id={props.inputId} class="base_input-input" />
        </div>
    );
}

export default BaseInput;