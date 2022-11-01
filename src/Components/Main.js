import img_logo from '../images/logo.png'
import About from './About'
import {Link} from "react-router-dom"
import SimpleSlider from './SimpleSlider'
import { BsPeople} from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import { SlRocket, SlPicture} from "react-icons/sl"
import { SiTensorflow } from "react-icons/si"
import { AiOutlineTool } from "react-icons/ai"


function Main() {
    return(
		<div>
			<body className="is-preload landing">
				<div id="page-wrapper">
					{/* 첫번째 배너 */}
					<section id="banner">
							<div className="content">
								<header>
									<h2>Art life with Artasy</h2>
									<p>We Provide Art life only You.<br />
									Let's Start with Artasy.</p>
								</header>
								<span class="image"><img src={img_logo} alt="img_logo" /></span>
							</div>
							<a href="#two" class="goto-next scrolly">Next</a>
					</section>

					{/* 두번 쨰 섹션 */}
					<section id="one" className="wrapper style2 special fade">
						<div class="container">
							<header>
								<h2>미술 큐레이팅 ARTASY와 시작해보세요</h2>
								<p>딥러닝 기반 미술 큐레이팅 시스템을 통해 사용자의 취향을 분석합니다.</p>
							</header>
							<form method="post" action="#" class="cta">
								<div claclassNamess="row gtr-uniform gtr-50">
									<div className="col-4 col-12-xsmall"><Link to='/register'><input type="button" value="Get Started" class="fit primary" /></Link></div>
								</div>
							</form>
						</div>
					</section>

					{/* 이미지 갤러리 */}
					<section id="two" className="wrapper style1 special fade-up">
							<div className="content">
								<SimpleSlider></SimpleSlider>
							</div>
						<a href="#three" className="goto-next scrolly">Next</a>
					</section>
					<hr />

					
					{/* 마지막 섹션 */}
					<section id="three" className="wrapper style1 special fade-up">
							<div className="container">
								<header className="major">
									<h2>ARTASY VISION</h2>
									<p>Easy art and culture life anytime, anywhere</p>
								</header>
								<div className="box alt">
									<div className="row gtr-uniform">
										<section className="col-4 col-6-medium col-12-xsmall">
											<BsPeople size="100"/>
											{/* <span className="icon solid alt major fa-chart-area"></span> */}
											<h3></h3>
											<h3>누구나</h3>
											<p>미술에 관심 있는 사람이라면 누구나</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<AiOutlineTool size="100"/>
											<h3></h3>
											<h3>쉽게</h3>
											<p>어려운 작품 설명은 그만</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<SlRocket size="100" />
											<h3></h3>
											<h3>빠르게</h3>
											<p>쉽고 빠르게 어디에서나</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<FiUser size="100"/>
											<h3></h3>
											<h3>맞춤 작품</h3>
											<p>당신이 기다리던 작품 추천</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<SiTensorflow size="100" />
											<h3></h3>
											<h3>AI</h3>
											<p>AI와 함께 해 더 강력한 취향 분석</p>
										</section>
										<section className="col-4 col-6-medium col-12-xsmall">
											<SlPicture size="100" />
											<h3></h3>
											<h3>문화 생활</h3>
											<p>언제 어디서나 즐기는 문화생활</p>
										</section>
									</div>
								</div>
								<footer className="major">
									<ul className="actions special">
										<li><Link to="/about"><a className="button">Learn More</a></Link></li>
									</ul>
								</footer>
							</div>
						</section>
					</div>
				</body>
			</div>
    );
}

export default Main;