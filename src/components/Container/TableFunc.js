import React from "react";

import Item from "../Presentational/UI/molecules/TableItem"

const testList = [
    [
        "a", 2, 500
    ],
    [
        "a", 2, 500
    ],
    [
        "a", 2, 500
    ],
    [
        "a", 2, 500
    ],
    [
        "a", 2, 500
    ]
];

export const tableContent = () => {
    const tableList = () => {
        let list = [];

        for (let i = 0; i < testList.length; i++) {
            list.push(
                <Item
                    content={testList[i]}/>
            )
        }

        return list;
    }

    let content = tableList();

    return content;
}

export const tableSum = ()=>{
    let sum = 0;

    for(let i = 0; i<testList.length;i++){
        sum += testList[i][2];
    }

    return sum;
}