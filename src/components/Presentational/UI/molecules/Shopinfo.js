import React from "react";

import SimCont from "../atoms/SimContent"

const Shopinfo = ({enrollnum, callnum}) => {

    return (
        <div>
            <row>
            <SimCont content="공급자등록번호"/> {enrollnum}</row>
            <row><SimCont content="대표번호"/> {callnum}</row>
        </div>
    )
}

export default Shopinfo;