import React from "react";

import Btn from "../atoms/Btn"
import SimCont from "../atoms/SimContent"

import {Link} from 'react-router-dom'

const Login = ({onReg}) => {
    return (
            <div>
                <SimCont
                content="아직 회원이 아니신가요? 비회원의 경우 QR을 이용한 단일 영수증 조회만 가능합니다."
                />
                <div className="Btn">
                <Link to="/register"><Btn placeholder="회원가입"/></Link>
                {/* {
                    onReg?
                    <Btn placeholder="QR로 조회하기" />
                    : null
                } */}
                </div>
            </div>
    )
}

export default Login;