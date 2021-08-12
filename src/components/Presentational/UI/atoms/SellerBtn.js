import React from "react";

const SellerBtn = ({placeholder, event, on}) => {
    console.log("SellerBtn",event);
    return (
        <button
            onClick={event}
            className="sellerBtn"
            style={{
                backgroundColor: `${on
                    ? 'rgb(100,100,100)'
                    : 'rgb(238,238,238)'}`,
                color: `${on
                    ? 'white'
                    : 'black'}`
            }}>{placeholder}</button>
    )
}

export default SellerBtn;
