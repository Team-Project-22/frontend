import db from "../db/sample_data.json"
import { Nav } from "react-bootstrap";

function MyPage() {
    // const { user } = useUserState();
   
    // function rand(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    //   }

    // var a = setInterval(function() {
    //     rand(0, 20);
    // }, 3000);

    // const a = rand(0, 20);
    const b = 1;

    return(
        <div id="main" className="wrapper style0">
            <div class="container">
                <header className="major">
                    <h2>MyPage</h2>
                </header>
                {/* <h1>{user.username}님의 마이페이지 입니다!</h1> */}

                <section>
                    <blockquote><h3>Hoon님의 취향 추천</h3></blockquote>
                    <div class="box alt">
                        <div class="row gtr-50 gtr-uniform">
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b].Obj_ID}>
                                    <img className="image fit" src={db[b].Img_file} alt=""/>
                                    <h3 className="align-center">{db[b].Title}</h3>
                                </Nav.Link>
                            </div>
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+1].Obj_ID}>
                                    <img className="image fit" src={db[b+1].Img_file} alt=""/>
                                    <h3 className="align-center">{db[b+1].Title}</h3>
                                </Nav.Link>
                            </div>
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+2].Obj_ID}>
                                    <img className="image fit" src={db[b+2].Img_file} alt=""/>
                                    <h3 className="align-center">{db[b+2].Title}</h3>
                                </Nav.Link>
                            </div>
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+3].Obj_ID}>
                                    <img className="image fit" src={db[b+3].Img_file} alt="" />
                                    <h3 className="align-center">{db[b+3].Title}</h3>
                                </Nav.Link>
                            </div>
                            <div className="col-4 col-6-xsmall">
                                <Nav.Link href={'detail/'+db[b+4].Obj_ID}>
                                    <img className="image fit" src={db[b+4].Img_file} alt=""/> 
                                    <h3 className="align-center">{db[b+4].Title}</h3>
                                </Nav.Link> 
                            </div>
                        </div>
                    </div>
				</section>
            </div>
        </div>
    );
};

export default MyPage;