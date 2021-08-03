import React from "react";

import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/molecules/Nav"
import Footer from "../UI/atoms/Footer"
import SubTitle from "../UI/atoms/SubTitle"

const SeeAll = () => {
    return (
        <div className="wrapper">
            <Nav/>
            <div id="MapContainer">
                <div className="item">
                    <SubTitle title="위치 보기"/>
                    <Receipt
                    map="true"
                    />
                </div>
                <div className="item"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default SeeAll;
