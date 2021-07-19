import Btn from "../atoms/Btn.js"
import Input from "../atoms/Input.js"
import React from "react";
import styled from 'styled-componeents';

const Login = ()=>{
    return (
        <div>
            <Input></Input>
            <Input></Input>
            <Btn>로그인</Btn> 
        </div>
    )
}

export default Login;