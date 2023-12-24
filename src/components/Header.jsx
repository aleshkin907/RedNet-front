import React from "react";
import "../styles/Header.css";
import logo_header from "../images/logo_header.svg"

function Header(){
    return(
        <div className="header">
            <img src={logo_header} alt="logotype" />
            <div className="user-settings-bar">
                <div className="avatar"></div>
                <span className="username-me">yantar</span>
                <button className="logout">Выход</button>
            </div>
        </div>
    );
};

export default Header;