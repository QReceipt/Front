import React from "react";

import Li from "../atoms/Li"

import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div id="Menu">
            <Li content="QReceipt 가맹점"/>
            <Link to="/register">
                <Li content="회원가입"/>
            </Link>
            <Link to="/login">
                <Li content="로그인"/>
            </Link>
        </div>
    )
}

export default Nav;