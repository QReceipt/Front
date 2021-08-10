import React from "react";

import Header from "../molecules/TableHeader"
import Sum from "../molecules/ReceiptSum"

import { tableContent,tableSum } from "../../../Container/TableFunc"

const ReceiptTable = () => {

    return (
            <table id = "receipt-table">
                <Header
                fstItem="메뉴"
                scndItem="수량"
                thirdItem="가격" />
                {tableContent()}
                <Sum 
                sum = {tableSum()}
                />
            </table>
    )
}

export default ReceiptTable;