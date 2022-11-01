import "../assets/css/noscript.css"
import "../assets/css/main.css"
import React, { useState } from 'react';
import Rating from "./rating";

import { useParams } from "react-router-dom";
import db from "../db/sample_data.json"

// 장바구니
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions";

function Detail() {
    const top = {
        paddingTop: "170px",
        fontSize: "35px"
        
    }
    const font ={
        fontSize: "20px"
    }
    const ComponentBox = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
        paddingTop: "30px",
        paddingLeft: "100px",
        paddingRight: "0px",
        width: "80%"
    }

    const { Obj_ID } = useParams();
    console.log({Obj_ID});
    const new_db = db.filter((db) => db.Obj_ID === Number(Obj_ID));

    // 좋아요
    let [like, likechange] = useState(0);

    // 장바구니
    const dispatch = useDispatch();

    if (db.lenth === 0) {
        return(
            <div>
                <h3>존재하지 않는 작품입니다.</h3>
            </div>
        )
    }

    return(
            <div id="main" className="wrapper style0">
                <header className="major">
                    <h2>Explain</h2>
                </header>
                    {new_db.map(db => (
                        <div className="row gtr-150">
                            <div className="col-7 col-12-medium">
                                <section id="content" style={ComponentBox}>
                                    <a href="#" className="image fit"><img src={db.Img_file}/></a>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section id="sidebar">
                                    <section>
                                        <h3 className="align-center" style={top}>{db.Title}</h3>
                                        <h3 className="align-center" style={font}>{db.Dimensions}</h3>
                                        <h3 className="align-center" style={font}>{db.Mediums}  {db.Obj_dates}</h3>
                                        <h3 className="align-center"><button onClick={() => dispatch(addCart(db))} className="button primary">관심목록 추가</button></h3>
                                        {/* <h3 className="align-center"><span onClick={()=>{ likechange(like+=1) }}>❤️</span> {like} </h3> */}
                                        <h3 className="align-center"><Rating></Rating></h3>                                       
                                    </section>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
    )
}

export default Detail;