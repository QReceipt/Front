import React from "react";

import SimCont from "../atoms/SimContent"

const Receiptdate = ({date, num}) => {

    return (
        <div>
            <row>
            <SimCont content="주문일시"/> {date}</row>
            <row><SimCont content="주문번호"/> {num}</row>
        </div>
    )
}

export default Receiptdate;