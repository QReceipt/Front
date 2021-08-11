import React from "react";

import Info from "../molecules/ReceiptCon"
import Title from "../atoms/Title"
import Btn from "../atoms/SellerBtn"

import Map from "../../asset/map.png"
import {Link} from "react-router-dom";

const SellerReceipt = ({
    posNum,
    posName,
    order,
    call,
    map
}) => {
    return (
        <div id="receiptFrame">
            <Info MainTitle="포스 번호" SubTitle="정산원명" MainContent={posNum} SubContent={posName}/>
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

            <Btn placeholder="매출 합계"/>
            <Btn placeholder="결제 수단 별 매출내역"/>
            <Btn placeholder="할인 매출내역"/>
            <Btn placeholder="현금시재 입력내역"/>
            <Btn placeholder="현금 정산액"/>
            <Btn placeholder="신용카드정산 내역"/>
            <Btn placeholder="카드사별 매출내역"/>
        </div>

    )
}

export default SellerReceipt;