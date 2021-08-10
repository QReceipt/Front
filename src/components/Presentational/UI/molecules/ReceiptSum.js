import React from "react";

const ReceiptSum = ({sum}) => {
    return (
        <tr>
            <td id="receipt-total" colSpan="2" content="gd">
                합계
            </td>
            <td content="gdgsag">
                {sum}
            </td>
        </tr>
    )
}

export default ReceiptSum;
