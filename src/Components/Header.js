import {Link} from "react-router-dom";
import Home from "./Main";
import Gallery from "./Gallary";
import About from "./About";
import Profile from "./MyPage";
import Login from "./login";
import Footer from "./Footer";
import Button from "./common/Button";
import styled from "styled-components";

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;


// 상단 메뉴바
function Header({user}) {
    return(
		<div>
			<header id="header">
				<h1 id="logo"><Link to="/">Artasy</Link></h1>
				<nav id="nav">
					<ul>
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/gallery">ART</Link></li>
					{/* <li><Link to="gallery">ARTIST</Link></li> */}
					<li><Link to="/about">ABOUT</Link></li>
					<li><Link to="/mypage">MY PAGE</Link></li>
					{user ? (
						<li>
							<div className="button primary">
								<UserInfo>{user.username}</UserInfo>
								<Button>로그아웃</Button>
							</div>
						</li>
					) : (
						<li>
							<div className="primary">
								<Button to="/login">로그인</Button>
							</div>
						</li>
					)}
					{/* <li><Link to="login"><a className="button primary">LOG IN</a></Link></li> */}
					</ul>
				</nav>
			</header>
		</div>
    );
  };

  export default Header;