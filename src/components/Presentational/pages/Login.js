import React from "react";

import Input from "../UI/organisms/Login"
import Title from "../UI/atoms/Title"
import LogIf from "../UI/organisms/LogIf"
import Footer from "../UI/atoms/Footer"

const Login = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
            <div className="Login">
                <Title title="로그인 하기"/>
                <Input/>
                <LogIf/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;