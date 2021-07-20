import React from "react";

import Input from "../molecules/LoginInput"
import Btn from "../atoms/Btn"
import SimCont from "../atoms/SimContent"

const Login = () => {
    return (
        <div>
            <div>
                <Input title="ID"/>
                <Input title="PASSWORD"/>
                <Btn placeholder="KAKAO"/>
                <Btn placeholder="GOOGLE"/>
                <Btn placeholder="Login"/>
            </div>
            <div>
                <SimCont
                content="아직 회원이 아니신가요?비회원의 경우 어플리케이션에서만 영수증 조회가 가능합니다."
                />
                <Btn placeholder="KAKAO"/>
                <Btn placeholder="GOOGLE"/>
                <Btn placeholder="Login"/>
            </div>
        </div>
    )
}

export default Login;