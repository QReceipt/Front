import React from "react";

import {detailList} from "../../../Container/ReceiptFunc"

const Detail = ({main}) => {
    return (
    <div>
        {detailList(main)}
    </div>)
}

export default Detail;