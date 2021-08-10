import React, {useState} from "react";

import HamBar from "../molecules/HamBar.js"
import HamBarC from "../atoms/HamBarC.js"
import Li from "../atoms/Li.js"

import {Link} from "react-router-dom";

const Nav = () => {
    let InitState = false;
    const [state, setState] = useState(InitState);

    const toggle = () => setState(!state);

    return (
        <div onClick={toggle}>

            <div id="Menu">
                <div id="shortNav">
                    {
                        state
                            ? <HamBar/>
                            : <HamBarC/>
                    }
                </div>
                <div id="longNav">

                    <Li content="QReceipt 가맹점"/>
                    <Link to="/register">
                        <Li content="회원가입"/>
                    </Link>
                    <Link to="/login">
                        <Li content="로그인"/>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default Nav;