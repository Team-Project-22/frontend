import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slide.css"
import db from "../db/sample_data.json"
import { Nav } from "react-bootstrap";

function SimpleSlider() {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    // var a = setInterval(function() {
    //     rand(0, 20);
    // }, 3000);

    const a = rand(0, 20);

    const imgcenter = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      autoplay: true,
      centerPadding: "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
    //   prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    //   nextArrow : "<button type='button' class='slick-next'>Next</button>",

    responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 960, //화면 사이즈 960px일 때
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:1
            } 
        },
        { 
            breakpoint: 768, //화면 사이즈 768px일 때
            settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:1
            } 
        }
        ]
    };


    return (
        <div className="container">
            <div>
                <header className="align-center">
                    <h1></h1>
                    <h2>Weekly Recommend</h2>
                    <p>Start Weekly Art with Artasy</p>
                </header>
            </div>
            {/* <div key={db[a].Obj_ID} > */}
            <div className="align-center">
                <Slider {...settings}>
                    <div className="align-center">
                        <Nav.Link style={imgcenter} href={'detail/'+db[a].Obj_ID}>
                            <img src={db[a].Img_file}/>
                        </Nav.Link>
                    </div>
                    <div className="align-center">
                        <Nav.Link style={imgcenter} href={'detail/'+db[a+1].Obj_ID}>
                            <img src={db[a+1].Img_file}/>
                        </Nav.Link>
                    </div>
                    <div className="align-center">
                        <Nav.Link style={imgcenter} href={'detail/'+db[a+2].Obj_ID}>
                            <img src={db[a+2].Img_file}/>
                        </Nav.Link>
                    </div>
                    <div className="align-center">
                        <Nav.Link style={imgcenter} href={'detail/'+db[a+3].Obj_ID}>
                            <img src={db[a+3].Img_file} />
                        </Nav.Link>
                    </div>
                    <div className="align-center">
                        <Nav.Link style={imgcenter} href={'detail/'+db[a+4].Obj_ID}>
                            <img src={db[a+4].Img_file} /> 
                        </Nav.Link> 
                    </div>

    
                    {/* <div className="align-center">
                        <h3>1</h3>
                    </div>
                    <div className="align-center">
                        <h3>2</h3>
                    </div>
                    <div className="align-center">
                        <h3>3</h3>
                    </div>
                    <div className="align-center">
                        <h3>4</h3>
                    </div>
                    <div className="align-center">
                        <h3>5</h3>
                    </div>
                    <div className="align-center">
                        <h3>6</h3>
                    </div> */}
                </Slider>
            </div>
        </div>
    )
};

export default SimpleSlider;