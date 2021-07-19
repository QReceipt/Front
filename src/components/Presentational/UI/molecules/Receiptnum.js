import Btn from "../atoms/Btn.js"
import Input from "../atoms/Input.js"
import React from "react";
import Title from "../atoms/Title.js"
import styled from 'styled-componeents';

const Receipt = styled.div`
    display:block;
`;

const Receiptnum = ()=>{
    return (
        <Receipt>
            <Title>로고로고로고</Title>
            <Input></Input>
            <Btn></Btn> 
        </Receipt>
    )
}

export default Receiptnum;