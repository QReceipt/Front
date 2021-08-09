import React from "react";

import Input from "../molecules/LoginInput"
import Select from "../molecules/TypeInput"

const Pw = () => {
    const type = () => {
        let tmp = ["손님/배달원", "점주"];
        let lists = [];

        for (let i = 0; i < 2; i++) {
            lists.push(<option value={i + 1} key={i+1}>{tmp[i]}</option>);
        }

        return lists;
    }

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