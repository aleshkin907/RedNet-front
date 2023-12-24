import React from "react";
import logo from "../images/logo.svg"
import '../styles/HeaderForm.css'

function HeaderForm(props) {
    return(
        <div className="header_form">
            <img src={logo} alt="logotype" />
            <h2 className="header_from-title">{props.title}</h2>
        </div>
    );
}

export default HeaderForm;
