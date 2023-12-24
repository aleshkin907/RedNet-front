import React from "react";
import HeaderForm from "../components/HeaderForm";
import Btn from "../components/Btn";
import BaseInput from "../components/BaseInput";

function Confirm(){
    return (
        <>
            <div className="wrapper-auth">
                <div className="form-container">
                    <HeaderForm title="Подтвердите регистрацию"/>
                    <form className="from">
                        <div className="form-fields">
                        <BaseInput inputLabel="Код:" 
                        inputType="text" inputId="code"/>
                        </div>
                        <Btn btnType="submit" btnText="Подтвердить"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Confirm;