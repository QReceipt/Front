import React from "react";

import Date from "../UI/organisms/Date"
import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/molecules/Nav"
import Page from "../UI/atoms/Page"
import Footer from "../UI/atoms/Footer"
import Detail from "../UI/organisms/Detail"
import SubTitle from "../UI/atoms/SubTitle"
import SelTit from "../UI/atoms/SimContent"
import Table from "../UI/molecules/AllTable"

const SeeAll = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <Nav/>
                <div id="container">
                    <div className="item">
                        <div className="fstCont">
                            <SubTitle title="영수증 모아보기"/>
                            <SelTit content="날짜 선택"/>
                        </div>
                        <Date/>
                        <Table/>
                        <Page num="001"/>
                    </div>
                    <div className="item"><Receipt map="false"/></div>
                    <div className="item"><Detail/></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SeeAll;
