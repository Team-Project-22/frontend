import art1 from "./img/art1.png"
import art2 from "./img/art2.png"
import art3 from "./img/art3.png"
import art4 from "./img/art4.png"
import art5 from "./img/art5.png"
import art6 from "./img/art6.png"
import Art from "./Art"
import {NavLink} from "react-router-dom";

function Gallery () {
    return(
        <div>
            <div id="main" class="wrapper style1">
				<div class="container">
					<header class="major">
						<h2>ART</h2>
					</header>
                    <section>
                        <h3>Art collections</h3>
                        <div class="box alt">
                            <div class="row gtr-50 gtr-uniform">
                                <div class="col-4 col-6-xsmall"><NavLink to="/artinfo"><span class="image fit"><img src={art1} alt="art1" /></span></ NavLink></div>
                                <div class="col-4 col-6-xsmall"><NavLink to="/artinfo"><span class="image fit"><img src={art2} alt="art2" /></span></ NavLink></div>
                                <div class="col-4 col-6-xsmall"><span class="image fit"><img src={art3} alt="art3" /></span></div>
                                <div class="col-4 col-6-xsmall"><span class="image fit"><img src={art4} alt="art4" /></span></div>
                                <div class="col-4 col-6-xsmall"><span class="image fit"><img src={art5} alt="art5" /></span></div>
                                <div class="col-4 col-6-xsmall"><span class="image fit"><img src={art6} alt="art6" /></span></div>
                            </div>
                        </div>
					</section>
                </div>
            </div>
        </div>
    );
}

export default Gallery;