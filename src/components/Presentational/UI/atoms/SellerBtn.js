import React from "react";

const SellerBtn = ({placeholder, event, onKey}) => {
    return (
        <button
            onClick={event}
            className="sellerBtn"
            style={{
                backgroundColor: `${onKey
                    ? 'rgb(100,100,100)'
                    : 'rgb(238,238,238)'}`,
                color: `${onKey
                    ? 'white'
                    : 'black'}`
            }}>{placeholder}</button>
    )
}

export default SellerBtn;
