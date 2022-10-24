import "../assets/css/noscript.css"
import "../assets/css/main.css"
import React from 'react';
import Rating from "./rating";
import art1 from "./img/art1.png"

import { useParams } from "react-router-dom";
import db from "../sample_data.json"

function Detail() {

    const sizeText = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
        
    }
    const imgsize = {
        maxWidth: "30%",
        //height: "aut50%",
        // paddingLeft: "500px",
        // paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        aligndbs: "center"
    }

    const { id } = useParams();
    // const db = props.db.filter((db) => db.id === Number(id));
    

    if (db.lenth === 0) {
        return(
            <div>
                <h3>존재하지 않는 작품입니다.</h3>
            </div>
        )
    }

    return(
        <div id="main" className="wrapper style1">
            <div className="row gtr-150">
                        {db.map((item, index) => {
                            return(
                                <div className="col-8 col-12-medium" key={index}>
                                    <div>
                                        <section id="content" style={imgsize}>
                                            <a className="image fit"><img src={item.Img_file}/></a>
                                        </section>
                                    </div>
                                    <div>
                                        <section id="sidebar" key={index}>
                                            <section>
                                                <h3 className="align-center">{item.Title}</h3>
                                                <h3 className="align-center">코튼에 유채, 235 x 183cm</h3>
                                                <h3 className="align-center">{item.Mediums}, {item.Dimensions}</h3>
                                                <h3 className="align-center">김환기</h3>
                                                <h3 className="align-center">1978</h3>
                                                <h3 className="align-center">{item.Obj_dates}</h3>
                                                <h3>{item.index}</h3>
                                                <div style={sizeText}><Rating></Rating></div> 
                                                &nbsp;
                                                <div className="row.gtr-150">
                                                    <p style={sizeText}>김환기는 미국으로 건너간 1963년부터 작고한 1974년 이르는 뉴욕시대를 통해 1950년 후반부터 산, 달, 강, 새, 나무 등이 있는 자연 풍경을 순수한 점, 선, 면의 조형적 요소로써 내밀한 서정의 새계로 심화시켰습니다.</p>
                                                    <p style={sizeText}>1968년 1월 23일 작가의 일기에 "날으는 점, 점들이 모여 형태를 상징하는 그런 것들을 시도하다."라고 적혀 있습니다. 이러한 점 모티브는 뉴욕시대에 행해진 과슈와 콜라주 그리고 파피에 마쉐, 오브제, 종이에 유채, 드로잉 등과 같이
                                                        재료와 양식의 범주를 자유롭게 넘나들었던 다양한 조형실험을 거쳐 70년대에 들어서면서 화면 전체를 덮는 전면점화로 발전됩니다.	
                                                    </p>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            );
                        })};
            </div>
       </div>
    )
}

export default Detail;