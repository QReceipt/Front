import React from "react";

import SimCont from "../atoms/SimContent"

const Payinfo = ({paydate, paysuccess}) => {

    return (
        <div>
            <row>
            <SimCont content="결제일"/> {paydate}</row>
            <row><SimCont content="결제유무"/> {paysuccess}</row>
        </div>
    )
}

export default Payinfo;