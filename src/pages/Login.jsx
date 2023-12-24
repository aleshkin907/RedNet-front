import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import BaseInput from "../components/BaseInput";
import HeaderForm from "../components/HeaderForm";
import '../styles/Login.css';

import Registration from './Registration';  
import Reset from "./Reset";
import Btn from "../components/Btn";

function Login () {
    return (
        <>
            <div className="wrapper-auth">
                <div className="form-container">
                    <HeaderForm title="Войдите на RedNet"/>
                    <form className="from">
                        <div className="form-fields">
                        <BaseInput inputLabel="Имя пользователя или адрес электронной почты:" 
                        inputType="text" inputId="username-email"/>
                        <BaseInput inputLabel="Пароль:" 
                        inputType="password" inputId="password"/>
                        <div className="fg-password">
                            <Link to="/reset-password" className="registration_link_container-link">Забыли пароль?</Link>
                            <Routes>
                                <Route path="/reset-password" element={ <Reset /> }/>
                            </Routes>
                        </div>
                        </div>
                        <Btn btnType="submit" btnText="Войти"/>
                    </form>
                    <div className="registration_link_container">
                        <h3 className="registration_link_container-title">Впервые на RedNet?</h3>
                        <Link to="/register" className="registration_link_container-link">Завести аккаунт</Link>
                        <Routes>
                            <Route path="/register" element={ <Registration /> }/>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
