import React from "react";

import arrow from "../../asset/arrow.png"
import Select from "../atoms/Select";

const ConPage = () => {
    return (
        <div id="conPage">
            <img src={arrow} id="leftArr" />
            <div className="selPage">
                <Select/>
            </div>
            <img src={arrow} id="rightArr" />
        </div>
    )
}

export default ConPage;