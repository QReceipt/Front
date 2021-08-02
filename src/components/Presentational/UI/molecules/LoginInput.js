import Input from "../atoms/Input.js"
import Content from "../atoms/SimContent"
import React from "react";

const LoginInput = ({title}) => {
    return (
        <div className="LoginInput">
                <Content content={title}/>
                <Input/>
        </div>
    )
}

export default LoginInput;