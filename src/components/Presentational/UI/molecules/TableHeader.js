import React from "react";

const TableHeader = ({fstItem, scndItem, thirdItem}) => {

    return (

        <tr>
            <th content="gd">
                {fstItem}
            </th>
            <th content="gd">
                {scndItem}
            </th>
            <th content="gdgsag">
                {thirdItem}
            </th>
        </tr>
    )
}

export default TableHeader;