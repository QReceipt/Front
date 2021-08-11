import React from "react";

import Select from "../atoms/Select"

import {date} from "../../../Container/ReceiptFunc"

const Date = () => {
    return (
        <div>
            <Select option={date("year")}/>
            <Select option={date("month")}/>
            <Select option={date("day")}/>
        </div>
    )
}

export default Date;