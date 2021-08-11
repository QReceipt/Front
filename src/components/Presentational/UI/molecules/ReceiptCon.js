import React from "react";

import Content from "../atoms/SimContent"

const ReceiptTop = ({MainTitle, SubTitle, MainContent, SubContent}) => {
    return (
        <div>
            <div>
                <Content content={MainTitle} mainCon={MainContent}/>
            </div>
            <div>
                <Content content={SubTitle} mainCon={SubContent}/>
            </div>
        </div>
    )
}

export default ReceiptTop;