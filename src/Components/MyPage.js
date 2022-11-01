import db from "../db/sample_data.json"
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import PersonalSlider from "./PersonalSlider";

function MyPage() {
    // const { user } = useUserState();
   
    // function rand(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    //   }

    // var a = setInterval(function() {
    //     rand(0, 20);
    // }, 3000);

    // const a = rand(0, 20);
    const b = 0;


    return(
        <div id="main" className="wrapper style0">
            <div class="container">
                <header className="major">
                    <h2>MyPage</h2>
                </header>
                {/* <h1>{user.username}님의 마이페이지 입니다!</h1> */}

                <section>
                    <blockquote><h3>Artasy_test님의 관심 작품</h3></blockquote>


                    <div class="box alt">
                        <div class="row gtr-50 gtr-uniform">
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+4].Obj_ID}>
                                    <img className="image fit" src={db[b+4].Img_file} alt=""/>
                                    <h3 className="align-center">{db[b+4].Title}</h3>
                                </Nav.Link>
                            </div>
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+7].Obj_ID}>
                                    <img className="image fit" src={db[b+7].Img_file} alt=""/>
                                    <h3 className="align-center">{db[b+7].Title}</h3>
                                </Nav.Link>
                            </div>
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+16].Obj_ID}>
                                    <img className="image fit" src={db[b+16].Img_file} alt=""/>
                                    <h3 className="align-center">{db[b+16].Title}</h3>
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
				</section>
                <hr/>

                <section>
                    <blockquote><h3>Artasy_test님의 추천 작품</h3></blockquote>
                    <PersonalSlider></PersonalSlider>
                </section>
                


                <hr/>
                <h3>작품이 취향에 맞으신가요?</h3>
                
                <form method="post" action="#">
                    <div className="row gtr-uniform gtr-50">
                        <div className="col-4 col-12-medium">
                            <input type="radio" id="priority-low" name="priority" checked></input>
                            <label for="priority-low">만족</label>
                        </div>
                        <div className="col-4 col-12-medium">
                            <input type="radio" id="priority-normal" name="priority"></input>
                            <label for="priority-normal">보통</label>
                        </div>
                        <div className="col-4 col-12-medium">
                            <input type="radio" id="priority-high" name="priority"></input>
                            <label for="priority-high">불만족</label>
                        </div>
                        <div className="col-12">
                            <textarea name="message" id="message" placeholder="기타 의견을 입력해주세요" rows="6"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="primary" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyPage;