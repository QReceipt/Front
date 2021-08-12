import React, {useCallback, useState} from "react";

import Li from "../atoms/Li"
import cancel from "../../asset/close.png"

import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div id="Menu">
            <div id="menubar">
                <img src={cancel}/>
            </div>
            <div id="liNav">
                <Link to="/register">
                    <Li content="회원가입"/>
                </Link>
                <Link to="/login">
                    <Li content="로그인"/>
                </Link>
            </div>
        </div>
    )
};
export default Nav;