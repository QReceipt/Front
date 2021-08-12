import React from "react";

import Btn from "../atoms/Btn"
import SimCont from "../atoms/SimContent"

import {Link} from 'react-router-dom'

const Login = () => {
    return (
            <div>
                <SimCont
                content="아직 회원이 아니신가요? 비회원의 경우 어플리케이션에서만 영수증 조회가 가능합니다."
                />
                <div className="Btn">
                <Link to="/register"><Btn placeholder="회원가입"/></Link>
                </div>
            </div>
    )
}

export default Login;