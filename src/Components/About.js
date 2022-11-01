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
                        Artasy에는 매일 사용자 취향에 맞는 작품이 추천됩니다.<br></br>
                        취향에 맞는 작품을 중심으로 자신만의 아트 라이프를 시작해보세요.<br></br>

                    </p>
                </header>
            </div>

                    <section id="content">

                        <h3>About Artasy</h3>
                        <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam cubilia adipiscing interdum aliquet aliquet placerat cubilia accumsan cep ante nullam adipiscing tortor odio. Iaculis adipiscing accumsan nascetur in cras. Lacinia placerat.</p>
                        <p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique faucibus magna adipiscing aliquet blandit nisi dolor accumsan nascetur lorem. Vis enim. Curae. Mi arcu vis aliquam ipsum non accumsan ac mi faucibus amet eu accumsan erat interdum semper accumsan. Eu sagittis tellus accumsan neque lorem penatibus in porttitor. Vivamus commodo curae. Condimentum lobortis praesent id ac lorem. Lorem vis ipsum dolor feugiat consequat dolore adipiscing.</p>
                        <br></br>
                        <br></br>
                        <h3>Artasy가 앞으로 걸어갈 길</h3>
                        <p>그 동안 미술 시장은 어렵다는 편견때문에 접근하기가 쉽지 않았습니다. 저희는 이러한 진입 장벽을 낮추고자 서비스를 시작했고 앞으로 진입 장벽을 낮추기 위해 노력할 것 입니다.</p>
                        <ul>
                            <li>누구나 사용 할 수 있는 작품 취향 추천</li>
                            <li>쉬운 설명을 통한 진입장벽 완화</li>
                            <li>짧은 시간 여러 작품을 감상</li>
                            <li>사용자만의 맞춤 작품 추천</li>
                            <li>인공지능을 통한 강력한 취향 분석</li>
                            <li>내가 있는 곳이 곧 미술관</li>
                        </ul>
                    </section> 
                    <hr />
                    

                    
                    <section>

                        <h3>Contact Us</h3>
                        <form method="post" action="#">
                            <div className="row gtr-uniform gtr-50">
                                <div className="col-6 col-12-xsmall">
                                    <input type="text" name="name" id="name" value="" placeholder="이름" />
                                </div>
                                <div className="col-6 col-12-xsmall">
                                    <input type="email" name="email" id="email" value=" " placeholder="Email" />
                                </div>
                                <div className="col-12">
                                    <select name="category" id="category">
                                        <option value="">- Category -</option>
                                        <option value="1">서비스 관련</option>
                                        <option value="1">오류 제보</option>
                                        <option value="1">기타문의</option>
                                    </select>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <input type="radio" id="priority-low" name="priority" checked></input>
                                    <label for="priority-low">Low Priority</label>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <input type="radio" id="priority-normal" name="priority"></input>
                                    <label for="priority-normal">Normal Priority</label>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <input type="radio" id="priority-high" name="priority"></input>
                                    <label for="priority-high">High Priority</label>
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