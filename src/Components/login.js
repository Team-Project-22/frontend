import logo_img from "./img/logo.png"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import "..//assets_log/css/main.css"
// import "../assets_log/css/util.css"

function Login() {
	const img_style = {
		width: "50%",
		height: "auto"
	}
    return(
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<form className="login100-form validate-form">
						<span class="login100-form-title p-b-48">
							<img src={logo_img} alt="LOGO" style={img_style}></img>
						</span>

						<div class="wrap-input100 validate-input" data-validate = "e-mail형식으로 입력하세요">
							<input class="input100" type="text" name="email"></input>
							<span class="focus-input100" data-placeholder="Email"></span>
						</div>

						<div class="wrap-input100 validate-input" data-validate="비밀번호를 입력하세요">
							<span class="btn-show-pass">
								<i class="zmdi zmdi-eye"></i>
							</span>
							<input class="input100" type="password" name="pass"></input>
							<span class="focus-input100" data-placeholder="Password"></span>
						</div>

						<div class="container-login100-form-btn">
							<div class="wrap-login100-form-btn">
								<div class="login100-form-bgbtn"></div>						
									<button class="login100-form-btn btn-dark">
										Login
									</button>
								</div>

						<div class="text-center p-t-115">
							<span class="txt1">
								Don’t have an account?
							</span>

							<a class="txt2" href="sinup/index.html">
								Sign Up<br></br>
							</a>

							<span class="txt1">
								Did you forgot id?
							</span>

							<a class="txt2" href="#">
								아이디 찾기
							</a>
						</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    );
}

export default Login;