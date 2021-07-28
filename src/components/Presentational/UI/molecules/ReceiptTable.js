import Td from "../atoms/Td.js"
import Tr from "../atoms/Tr.js"
import Th from "../atoms/Th.js"
import React from "react";


const ReceiptTable = () => {

    return (
            <table id = "receipt-table">
                <tr>
                    <th content="gd">
                        메뉴
                    </th>
                    <th content="gd">
                        수량
                    </th>
                    <th content="gdgsag">
                        금액
                    </th>
                </tr>
                <tr>
                    <td content="gd">
                       어쩌고저쩌고
                    </td>
                    <td content="gdgsag">
                       1
                    </td>
                    <td content="gdgsag">
                       5000
                    </td>
                </tr>
                <tr>
                    <td id ="receipt-total" colspan ="2" content="gd">
                        합계
                    </td>
                    <td content="gdgsag">
                       5000
                    </td>
                </tr>
            </table>
    )
}

export default ReceiptTable;

/*


const ReceiptTable = () => {

    return (
            <table id = "receipt-table">
                <Tr>
                    <Th content="gd">
                        
                    </Th>
                    <Th content="gd">
                        수량
                    </Th>
                    <Th content="gdgsag">
                        금액
                    </Th>
                </Tr>
                <Tr>
                    <Td content="gd">
                       어쩌고저쩌고
                    </Td>
                    <Td content="gdgsag">
                       1
                    </Td>
                    <Td content="gdgsag">
                       5000
                    </Td>
                </Tr>
                <Tr>
                    <Td id ="receipt-total" colspan ="2" content="gd">
                        합계
                    </Td>
                    <Td content="gdgsag">
                       5000
                    </Td>
                </Tr>
            </table>
    )
}
*/