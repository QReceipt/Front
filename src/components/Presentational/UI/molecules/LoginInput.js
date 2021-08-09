import Input from "../atoms/Input.js"
import Content from "../atoms/SimContent"
import React from "react";

const LoginInput = ({title, placeHolder}) => {
    return (
        <div className="LoginInput">
                <Content content={title}/>
                <Input placeHolder={placeHolder}/>
        </div>
    )
}

export default LoginInput;