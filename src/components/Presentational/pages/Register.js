import React from "react";

import Input from "../UI/organisms/Pw"
import Title from "../UI/atoms/Title"
import Footer from "../UI/atoms/Footer"
import Btn from "../UI/atoms/Btn";

const Register = () => {

    return (
        <div className="container-fluid">
            <div className="Login">
                <Title title="회원가입"/>
                <Input/>
                <Btn placeholder="회원가입"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;