import React from "react";
import Btn from "../components/Btn";
import BaseInput from "../components/BaseInput";
import HeaderForm from "../components/HeaderForm";

function NewPassword(){
    return (
        <>
            <div className="wrapper-auth">
                <div className="form-container">
                    <HeaderForm title="Восстановите пароль"/>
                    <form className="from">
                        <div className="form-fields">
                        <BaseInput inputLabel="Новый пароль:" 
                        inputType="text" inputId="new-password"/>
                        <BaseInput inputLabel="Повторите новый пароль:" 
                        inputType="text" inputId="new-password-confirm"/>
                        </div>
                        <Btn btnType="submit" btnText="Сбросить пароль"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewPassword;
