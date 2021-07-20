import Input from "../atoms/Input.js"
import Content from "../atoms/SimContent"
import React from "react";

const LoginInput = ({title}) => {
    return (
        <div>
                <Content content={title}/>
                <Input/>
        </div>
    )
}

export default LoginInput;