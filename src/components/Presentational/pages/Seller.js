import React from "react";

import Date from "../UI/organisms/Date"
import Receipt from "../UI/organisms/SellerReceipt"
import Nav from "../UI/organisms/Nav"
import Page from "../UI/atoms/Page"
import Footer from "../UI/atoms/Footer"
import Detail from "../UI/organisms/Detail"
import Title from "../UI/atoms/Title";
import Controll from "../UI/molecules/ConPage"

const SeeAll = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <Nav/>
                <div id="container">
                    <div className="item">
                        <div className="fstCont">
                            <Title title="영수증 모아보기(점주용)"/>
                        </div>
                        <Date/>
                        <Page num="001"/>
                    </div>
                    <div className="item">
                        <Receipt map="false"/>
                        <Controll/>
                        </div>
                    <div className="item">
                        <Detail/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SeeAll;
