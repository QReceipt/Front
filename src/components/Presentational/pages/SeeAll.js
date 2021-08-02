import React from "react";

import "./css/SeeAll.css"

import Date from "../UI/organisms/Date"
import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/molecules/Nav"
import Page from "../UI/atoms/Page"

const SeeAll = () => {
    return (
        <div>
            <div><Nav/></div>
            <div id="container">
                <div className="item">
                    <Date/>
                    <Page/>
                </div>
                <div className="item"><Receipt/></div>
                <div className="item"></div>
            </div>
        </div>
    )
}

export default SeeAll;
