export default function ImageSlider() {
    return(
        <section className="section section-top section-full">
            <div id="carousel-main-slide" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="industrial-catering-service"><img src="imgs/banner/banner1.png" alt="" className="d-block w-100" /></a>
                </div>
                <div className="carousel-item">
                    <a href="industrial-catering-service"><img src="imgs/banner/banner2.png" alt="chúc mừng năm mới 2024" className="d-block w-100" /></a>
                </div>
                <div className="carousel-item">
                    <a href="industrial-catering-service">
                    <img
                    src="imgs/banner/banner3.png"
                    alt="Hạnh Phúc - Dịch vụ cung cấp suất ăn công nghiệp tại Sơn La hàng đầu"
                    className="d-block w-100"
                    /></a>
                </div>
                <div className="carousel-item">
                    <a href="recruitment">
                    <img
                    src="imgs/banner/banner4.png"
                    alt="Công ty suất ăn công nghiệp"
                    className="d-block w-100"
                    /></a>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-main-slide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-main-slide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}