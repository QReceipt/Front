import React from "react";

import Date from "../UI/organisms/Date"
import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/organisms/Nav"
import Footer from "../UI/atoms/Footer"
import Detail from "../UI/organisms/Detail"
import Table from "../UI/organisms/AllTable"
import Title from "../UI/atoms/Title";
import Controll from "../UI/molecules/ConPage"

let obj = {
    "배달 주소" : "tmp",
    "연락처" : "tmp",
    "가게 요청사항" : "tmp",
    "배달 요청사항" : "tmp",
    "수저/포크 유무" : "tmp",
    "원산지 표시" : "tmp"
}

const SeeAll = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <Nav/>
                <div id="container">
                    <div className="item">
                        <div className="fstCont">
                            <Title title="영수증 모아보기"/>
                        </div>
                        <Date/>
                        <div id="all-table">
                            <Table/>
                        </div>
                    </div>
                    <div className="item">
                        <Receipt map="false"/>
                        <Controll/>
                        </div>
                    <div className="item">
                        <Detail main={obj}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SeeAll;
