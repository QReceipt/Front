import React from "react";

import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/organisms/Nav"
import Footer from "../UI/atoms/Footer"
import Detail from "../UI/organisms/Detail"
import Title from "../UI/atoms/Title";
import SimCont from "../UI/atoms/SimContent";
import Btn from "../UI/atoms/Btn"
import LogIf from "../UI/organisms/LogIf"

let obj = {
    "배달 주소": "tmp",
    "연락처": "tmp",
    "가게 요청사항": "tmp",
    "배달 요청사항": "tmp",
    "수저/포크 유무": "tmp",
    "원산지 표시": "tmp"
}

const SeeId = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <Nav/>
                <div id="container">
                    <div className="item">
                        <div className="fstCont">
                            <Title title="영수증 조회"/>
                            <SimCont content="현재 QR을 이용한 임시 영수증 조회 기능을 사용 중입니다. 다른 영수증을 조회하려면 로그인이 필요합니다."/>

                            <div className="Btn">
                                <Btn placeholder="로그인"/>
                            </div>
                            <LogIf />
                        </div>
                    </div>
                    <div className="item">
                        <Receipt map="false"/>
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

export default SeeId;
