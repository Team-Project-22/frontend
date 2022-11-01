function About() { 
    const submit = {
        listStyleType: "none",
        width: "100%",
        height: "40px"
    }

    return(
        <div id="main" className="wrapper style1">
            <div className="container">
            <div>
                <header className="major"> 
                    <h2>Artasy</h2>
                    <p>Artasy와 함께 아트라이프를 시작해보세요.
                        <p>국내 유일의 딥러닝 기반 아트 큐레이팅 서비스</p>
                    </p>
                    <p>Artasy는 미술 시장의 진입장벽을 낮추기 위해 각 분야의 전문가들이 모여 시작했습니다.<br></br>
                        데이터 베이스 전문가, AI 전문가, 신진작가, 큐레이터, 디자이너 등 
                        각 분야에서 우수한 능력을 발휘하고 있는 이들과 함께합니다. 
                    </p>
                    <p>
                        딥러닝 기술을 기반으로 한 추천시스템,<br></br>
                        Artasy에서는 매일 사용자 취향에 맞는 작품이 추천됩니다.<br></br>
                        취향에 맞는 작품을 중심으로 자신만의 아트 라이프를 시작해보세요.<br></br>

                    </p>
                </header>
            </div>

                    <section id="content">

                        <h3>About Artasy</h3>
                        <p>2022년 10월 서비스를 시작한 ARTASY는 DL을 이용한 개인별 맞춤 작품 추천을 통해 미술시장의 진입 장벽을 낮추고자 노력해왔습니다. 여러 작가들의 주요 작품과 흐름을 확인하고 미술문화와 시장을 두루 통합하는 등 미술은 물론 문화를 아우르는 허브의 역할을 하고 있습니다. 또한 국내 작가 뿐만 아니라 해외 작가의 작품을 통해 다양한 시각을 넓힐 수 있습니다. 이 밖에도 개인 맞춤 서비스를 위해 꾸준히 노력하는 등 한국 미술 시장 선두에서 일반 사용자를 대상으로 미술 시장에 대한 잠재력과 가능성을 알리고 있습니다.</p>
                        <br></br>
                        <h3>Artasy가 앞으로 걸어갈 길</h3>
                        <p>그 동안 미술 시장은 어렵다는 편견때문에 접근하기가 쉽지 않았습니다. 저희는 이러한 진입 장벽을 낮추고자 서비스를 시작했고 앞으로 진입 장벽을 낮추기 위해 노력할 것 입니다.</p>
                        <ul>
                            <li>누구나 사용 할 수 있는 작품 취향 추천을 통해 미술 시장의 진입장벽을 낮추었습니다.</li>
                            <li>쉬운 설명을 통해 미술 작품에 대한 흥미를 가져옵니다.</li>
                            <li>짧은 시간 여러 작품을 감상할 수 있습니다.</li>
                            <li>개인 사용자만의 맞춤 작품 추천을 통해 자신의 취향을 분석합니다.</li>
                            <li>인공지능을 통한 강력한 취향 분석을 통해 보다 정확한 추천 작품을 볼 수 있습니다.</li>
                            <li>내가 있는 곳이 곧 미술관이 되어 시공간의 제약을 받지 않습니다.</li>
                        </ul>
                    </section> 
                    <hr />
                    

                    
                    <section>

                        <h3>Contact Us</h3>
                        <form method="post" action="#">
                            <div className="row gtr-uniform gtr-50">
                                {/* <div className="col-6 col-12-xsmall">
                                    <input type="text" name="name" id="name" value="" placeholder="이름" />
                                </div>
                                <div className="col-6 col-12-xsmall">
                                    <input type="email" name="email" id="email" value=" " placeholder="Email" />
                                </div> */}
                                <div className="col-12">
                                    <select name="category" id="category">
                                        <option value="">- Category -</option>
                                        <option value="1">서비스 관련</option>
                                        <option value="1">오류 제보</option>
                                        <option value="1">기타문의</option>
                                    </select>
                                </div>
                                <div claclassNamess="col-6 col-12-medium">
                                    <input type="checkbox" id="copy" name="copy"></input>
                                    <label for="copy">이메일 수신에 동의합니다.</label>
                                </div>
                                <div className="col-6 col-12-medium">
                                    <input type="checkbox" id="human" name="human" checked></input>
                                    <label for="human">로봇이 아닙니다.</label>
                                </div>
                                <div className="col-12">
                                    <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                                </div>
                                <div className="col-12">
                                    <ul style={submit} className="actions">
                                        <li><input type="submit" value="Send Message" className="primary" /></li>
                                        <li><input type="reset" value="Reset" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </section>
            </div>
        </div>
    );
};

export default About;