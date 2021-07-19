import Btn from "../atoms/Btn.js"
import Input from "../atoms/Input.js"
import React from "react";
import styled from 'styled-componeents';

const Receipt = styled.div`
    display:block;
`;

const Receiptnum = ()=>{
    return (
        <Receipt>
            <Input></Input>
            <Btn></Btn> 
        </Receipt>
    )
}

export default Receiptnum;