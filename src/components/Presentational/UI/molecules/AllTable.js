import React from "react";

import Td from "../atoms/Td.js"
import Tr from "../atoms/Tr.js"
import Th from "../atoms/Th.js"


const AllTable = () => {

    return (
            <table id = "all-table">
                <tr><th>aaa</th></tr>
                <tr><td>aaa</td></tr>
                <tr><td>aaa</td></tr>
                <tr><td>aaa</td></tr>
                <tr><td>aaa</td></tr>
                <tr><th>aaa</th><td>aaa</td></tr>
            </table>
    )
}

export default AllTable;

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