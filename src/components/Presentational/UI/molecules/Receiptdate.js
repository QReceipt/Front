import React from "react";

import SimCont from "../atoms/SimContent"

const Receiptdate = ({date, num}) => {

    return (
        <div>
            <div>
                <SimCont content="주문일시"/> {date}
            </div>
            <div>
                <SimCont content="주문번호"/> {num}
            </div>
        </div>
    )
}

export default Receiptdate;