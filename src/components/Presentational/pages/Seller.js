import React, {useCallback, useState} from "react";

import Date from "../UI/organisms/Date"
import SellerReceipt from "../UI/organisms/SellerReceipt"
import Nav from "../UI/organisms/Nav"
import Footer from "../UI/atoms/Footer"
import Detail from "../UI/organisms/Detail"
import Title from "../UI/atoms/Title";
import Controll from "../UI/molecules/ConPage"

import {setMainKey} from "../../Container/ReceiptFunc"

const SeeAll = () => {
    const [on, setOn] = useState(null);
    const [detail, setDetail] = useState([]);

    const setBtn = (key) => {
        setOn(on === key? null : key)
        setDetail(key);
    }

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
                    </div>
                    <div className="item">
                        <SellerReceipt map="false" event={setBtn} on={on}/>
                        <Controll/>
                    </div>
                    <div className="item">
                        <Detail
                        main={setMainKey(detail)}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SeeAll;
