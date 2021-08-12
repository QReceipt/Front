import React,{useState} from "react";

export const date = (type) => {
    let lists = [];

    if (type === "year") {
        let i = 2001;
        while (i < 2022 && i > 2000) {
            lists.push(<option value={i + 1}  key={i+1}>{i}년</option>);
            i += 1;
        }
    } else {
        let end = (type==="month")? 13: 32;
        let tmp = (type==="month")? "월": "일";
        
        for (let i = 1; i < end; i++) {
            lists.push(<option value={i + 1}  key={i+1}>{i}{tmp}</option>);
        }
    }

    return lists;
}