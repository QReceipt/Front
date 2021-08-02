import React from "react";

import Date from "../UI/organisms/Date"
import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/molecules/Nav"
import Page from "../UI/atoms/Page"
import Footer from "../UI/atoms/Footer"
import Detail from "../UI/organisms/Detail"
import SubTitle from "../UI/atoms/SubTitle";

const SeeAll = () => {
    return (
        <div className="wrapper">
            <Nav/>
            <div id="container">
                <div className="item">
                    <SubTitle title="날짜 모아보기"/>
                    <Date/>
                    <Page
                    num = "001"/>
                </div>
                <div className="item"><Receipt/></div>
                <div className="item"><Detail /></div>
            </div>
            <Footer />
        </div>
    )
}

export default SeeAll;
