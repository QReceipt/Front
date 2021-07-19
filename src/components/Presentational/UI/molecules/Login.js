import Btn from "../atoms/Btn.js"
import Input from "../atoms/Input.js"
import React from "react";
import styled from 'styled-components';

const Receipt = styled.div`
    display:inline-block;
`;


const Login = ()=>{
    return (
        <Receipt>
            <Input></Input>
            <Input></Input>
            <Btn></Btn> 
        </Receipt>
    )
}

export default Login;