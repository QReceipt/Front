import Input from "../atoms/Input.js"
import Content from "../atoms/SimContent"
import React from "react";

const LoginInput = () => {
    return (
        <div>
            <div>
                <Content content="ID"/>
                <Input/>
            </div>
        </div>
    )
}

export default LoginInput;