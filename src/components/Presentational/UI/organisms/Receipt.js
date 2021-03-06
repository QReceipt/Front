import React from "react";

import Title from "../atoms/Title"
import Info from "../molecules/ReceiptCon"
import ReceiptTable from "./ReceiptTable";

import Map from "../../asset/map.png"
import {Link} from "react-router-dom";

const Receipt = ({
    orderdate,
    ordernum,
    order,
    call,
    paydate,
    paysuccess,
    map
}) => {
    return (
        <div id="receiptFrame">
            <Info
                MainTitle="주문 일시"
                SubTitle="주문 번호"
                MainContent={orderdate}
                SubContent={ordernum}/>
            <div id="receipttitle">
                <Title title="가게 이름"/> {
                    (map === "false")
                        ? <Link to="/map">
                                <img src={Map} id="mapbutton" placeholder="위치"/>
                            </Link>
                        : null
                }

            </div>
            <Info
                MainTitle="공급자등록번호"
                SubTitle="대표 번호"
                MainContent={order}
                SubContent={call}/>
            <ReceiptTable/>
            
            <Info
                MainTitle="결제일"
                SubTitle="결제유무"
                MainContent={paydate}
                SubContent={paysuccess}/>
        </div>

    )
}

export default Receipt;