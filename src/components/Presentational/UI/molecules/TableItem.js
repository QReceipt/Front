import React from "react";

const TableItem = ({content}) => {

    return (
        <tr>
                <td content="gd">
                    {content[0]}
                </td>
                <td content="gdgsag">
                    {content[1]}
                </td>
                <td content="gdgsag">
                    {content[2]}
                </td>
            </tr>
    )
}


export default TableItem;