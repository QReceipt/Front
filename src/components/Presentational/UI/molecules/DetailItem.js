import React from "react";

import SubTitle from "../atoms/SubTitle"
import Content from "../atoms/SimContent"

const DetailItem = ({title, content})=>{
    return (
        <div>
            <SubTitle
            title={title}/>
            <Content content={content}/>
        </div>
    )
}

export default DetailItem;