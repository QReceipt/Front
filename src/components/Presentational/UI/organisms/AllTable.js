import React from "react";

import Sum from "../molecules/ReceiptSum"
import Header from "../molecules/TableHeader"
import { tableContent, tableSum } from "../../../Container/TableFunc"

const AllTable = () => {
    return (
        <table id="receipt-table">
            <Sum
            sum = {tableSum()}
            />
            <Header
                fstItem="가게명"
                scndItem="방문 시간"
                thirdItem="사용 금액" />
            {tableContent()}
        </table>
    )
}

export default AllTable;