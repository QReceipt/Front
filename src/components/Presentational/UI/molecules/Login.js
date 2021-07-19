import Btn from "../atoms/Btn.js"
import Input from "../atoms/Input.js"
import React from "react";
import Title from "../atoms/Title.js"
import styled from 'styled-components';

const Receipt = styled.div`
    display:inline;
    float:left;
`;


const Login = ()=>{
    return (
        <div>
            <Title>로고로고로고</Title>
            <Input></Input>
            <Input></Input>
            <Btn></Btn> <Btn></Btn> <Btn></Btn> 
        </div>
    )
}

export default Login;