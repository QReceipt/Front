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
                <div id="menubar">
                        {
                            state
                                ? <HamBar/>
                                : <HamBarC/>
                        }
                </div>
            </div>
        </div>
    )
};
export default Nav;