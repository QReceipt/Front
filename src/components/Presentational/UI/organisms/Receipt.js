import React from "react";

import Top from "../molecules/ReceiptTop"
import Title from "../atoms/Title"
import Btn from "../atoms/Btn"
import Receiptdate from "../molecules/Receiptdate"
import Shopinfo from "../molecules/Shopinfo"
import ReceiptTable from "../molecules/ReceiptTable";
import Payinfo from "../molecules/Payinfo";

const Receipt = ({
    orderdate, 
    ordernum,
    order,
    call,
    paydate,
    paysuccess
}) => {
    return (
        <div id="receiptFrame">
            <Top />
            <Receiptdate num={ordernum} date={orderdate}></Receiptdate>
            <div id = "receipttitle">
                <Title
                    title="가게 이름"
                    />
                    <Btn id = "mapbutton" placeholder="위치"/>
            </div>
            <Shopinfo enrollnum={order} callnum={call}></Shopinfo>
            <ReceiptTable></ReceiptTable>
            <Payinfo paydate={paydate} paysuccess={paysuccess}></Payinfo>
        </div>
        
    )
}

export default Receipt;