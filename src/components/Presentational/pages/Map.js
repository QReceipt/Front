import React from "react";

import Receipt from "../UI/organisms/Receipt"
import Nav from "../UI/molecules/Nav"
import Footer from "../UI/atoms/Footer"
import Title from "../UI/atoms/Title"

const SeeAll = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <Nav/>
                <div id="MapContainer">
                    <div className="item">
                        <div className="fstCont">
                            <Title title="위치 보기"/>
                            <Receipt map="true"/>
                        </div>
                    </div>
                    <div className="item"></div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default SeeAll;
