function MyPage() {
    // const { user } = useUserState();
    return(
        <div id="main" className="wrapper style0">
            <div class="container">
                <header className="major">
                    <h2>MyPage</h2>
                </header>
                {/* <h1>{user.username}님의 마이페이지 입니다!</h1> */}
                <section>
                    {/* <h1>oo님의 마이페이지 입니다!</h1> */}
                    <h3></h3>
                    {/* <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote> */}
                </section>

                <section>
                    <blockquote><h3>oo님의 Favorite</h3></blockquote>
                    <div class="box alt">
                        <div class="row gtr-50 gtr-uniform">
                            <div class="col-12"><span class="image fit"><img src="images/pic07.jpg" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art1.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art2.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art3.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art4.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art5.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art6.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art7.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art8.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art9.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art10.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art11.png" alt="" /></span></div>
                            <div class="col-4 col-6-xsmall"><span class="image fit"><img src="../img/art12.png" alt="" /></span></div>
                        </div>
                    </div>
				</section>
            </div>
        </div>
    );
};

export default MyPage;