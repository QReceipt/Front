import React from "react";

import Content from "../atoms/SimContent"
import Select from "../atoms/Select"

const TypeInput = ({title, list}) => {
    return (
        <div className="LoginInput">
            <Content content={title}/>
            <div id="typeSelect">
                <Select option={list}/>
            </div>
        </div>
    )
}

export default TypeInput;