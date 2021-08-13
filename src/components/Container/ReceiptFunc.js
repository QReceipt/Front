import React, {useState} from "react";

import Item from "../Presentational/UI/molecules/DetailItem"

export const date = (type) => {
    let lists = [];

    if (type === "year") {
        let i = 2001;
        while (i < 2022 && i > 2000) {
            lists.push(<option value={i + 1} key={i + 1}>{i}년</option>);
            i += 1;
        }
    } else {
        let end = (type === "month")
            ? 13
            : 32;
        let tmp = (type === "month")
            ? "월"
            : "일";

        for (let i = 1; i < end; i++) {
            lists.push(<option value={i + 1} key={i + 1}>{i}{tmp}</option>);
        }
    }

    return lists;
}

export const detailList = (obj) => {
    let list = [];

    for (let objKey in obj) {
        list.push(<Item title={objKey} content={obj[objKey]} key={objKey}/>)
    }
    return list
}

let obj = {
    "배달 주소": "tmp",
    "연락처": "tmp",
    "가게 요청사항": "tmp",
    "배달 요청사항": "tmp",
    "수저/포크 유무": "tmp",
    "원산지 표시": "tmp"
}

let obj2 = {
    "배달 주소2": "tmp",
    "연락처2": "tmp",
    "가게 요청사항2": "tmp",
    "배달 요청사항2": "tmp",
    "수저/포크 유무2": "tmp",
    "원산지 표시2": "tmp"
}

export const setMainKey = (mainKey) => {
    switch (mainKey) {
        case 'sum':
            return obj;
        case 'payWith':
            return obj2;
        case 'sale':
            return obj;
        case 'cashInput':
            return obj;
        case 'cashSum':
            return obj2;
        case 'credit':
            return obj;
        case 'creditCom':
            return obj;

        default:
            break;
    }
}