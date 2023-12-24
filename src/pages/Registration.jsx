import React from "react";
import HeaderForm from "../components/HeaderForm";
import BaseInput from "../components/BaseInput";
import Btn from "../components/Btn";

function Registration () {
    return (
        <>
            <div className="wrapper-auth">
                <div className="form-container">
                    <HeaderForm title="Зарегистрируйтесь на RedNet"/>
                    <form className="from">
                        <div className="form-fields">
                        <BaseInput inputLabel="Имя пользователя:" 
                        inputType="text" inputId="username"/>
                        <BaseInput inputLabel="Эл. почта:" 
                        inputType="text" inputId="username-email"/>
                        <BaseInput inputLabel="Пароль:" 
                        inputType="password" inputId="password"/>
                        <BaseInput inputLabel="Повторите пароль:" 
                        inputType="password" inputId="password-confirm"/>
                        </div>
                        <Btn btnType="submit" btnText="Зарегистрироваться"/>
                    </form>
                    {/* <div className="registration_link_container">
                        <h3 className="registration_link_container-title">Впервые на RedNet?</h3>
                        <Link to="/register" className="registration_link_container-link">Завести аккаунт</Link>
                        <Routes>
                            <Route path="/register" element={ <Registration /> }/>
                        </Routes>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Registration;
