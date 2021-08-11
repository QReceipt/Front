import React from "react";

import Input from "../molecules/LoginInput"
import Select from "../molecules/TypeInput"

import {type} from "../../../Container/UseApi.js"

const Pw = () => {
    return (
        <div id="RegForm">
            <Input title="이메일" placeHolder="ex)qreceipt@naver.com"/>
            <Input title="비밀번호"/>
            <Input title="비밀번호 확인"/>
            <Select title="유형 선택" list={type()}/>
        </div>
    )
}

export default Pw;