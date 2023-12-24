import React from "react";
import HeaderForm from "../components/HeaderForm";
import BaseInput from "../components/BaseInput";
import Btn from "../components/Btn";

function Reset(){
    return (
        <>
            <div className="wrapper-auth">
                <div className="form-container">
                    <HeaderForm title="Восстановите пароль"/>
                    <form className="from">
                        <div className="form-fields">
                        <BaseInput inputLabel="Введите  адрес электронной почты Вашей учетной записи, и мы вышлем ссылку для сброса пароля:" 
                        inputType="text" inputId="username-email"/>
                        </div>
                        <Btn btnType="submit" btnText="Сбросить пароль"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Reset;