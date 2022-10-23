import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import artpiece from "./artpiece";

function ArtList(props) {


    return(
        <div class="container">
					<header className="major">
						<h2>ART</h2>
					</header>
                    <section>
                        <h3>Art collections</h3>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                                {props.artpiece.map((item, index) => {
                                    return(
                                            <div className="col-4 col-6-xsmall" key={index}>
                                                <Nav.Link href={'detail/'+item.id}>
                                                    <img src={item.src} width="90%" />
                                                </Nav.Link>
                                                <h4>id : {item.id}</h4>
                                                <h4>{item.title}</h4>
                                                <h4>{item.est}</h4>
                                                <h4>{item.size}</h4>
                                                <h4>{item.style}</h4>
                                                <h4>{item.name}</h4>
                                                <h4>{index}</h4>
                                            </div>
                                    );
                                })};
                            </div>
                        </div>
					</section>
                </div>
    );
};

export default ArtList;