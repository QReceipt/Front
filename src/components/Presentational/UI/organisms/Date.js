import React from "react";

import Select from "../atoms/Select"

const Date = () => {
    const date = (type) => {
        let lists = [];

        if (type === "year") {
            let i = 2001;
            while (i < 2022 && i > 2000) {
                lists.push(<option value={i + 1}>{i}년</option>);
                i += 1;
            }
        } else {
            let end = (type==="month")? 13: 32;
            
            for (let i = 1; i < end; i++) {
                lists.push(<option value={i + 1}>{i}일</option>);
            }
        }

        return lists;
    }

    return (
        <div>
            <Select option={date("year")}/>
            <Select option={date("month")}/>
            <Select option={date("day")}/>
        </div>
    )
}

export default Date;