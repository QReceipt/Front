import React from "react";

import Input from "../molecules/LoginInput"
import Btn from "../atoms/Btn"

const Login = () => {
    return (
        <div>
            <Input title="ID"/>
            <Input title="PASSWORD"/>
            <div className="Btn">
                <Btn placeholder="KAKAO"/>
                <Btn placeholder="GOOGLE"/>
                <Btn placeholder="로그인"/>
            </div>
        </div>
    )
}

export default Login;