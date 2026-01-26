export default function ImageSlider() {
    return(
        <section className="section section-top section-full">
            <div id="carousel-main-slide" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="storage/image/452/TCzoGzAnpxpO6jAtuLJ24rQHf4hkwgwtTJZ0QM3O.jpeg" alt="Quốc khánh 2.9" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="storage/image/349/HPMSFCcwSsAKq6A8crfk2Lu4IIWm8NqwITKHAvs0.png" alt="chúc mừng năm mới 2024" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img
                    src="storage/image/379/GoWAbjEhGPyjAYzYuKR87o5xfs62rdrxvDAfu1Bb.png"
                    alt="Hạnh Phúc - Dịch vụ cung cấp suất ăn công nghiệp tại Sơn La hàng đầu"
                    className="d-block w-100"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    src="storage/image/438/hNRHev1y1SaRbXOq9t3Qhqm5WdyugUHC41BZX8xA.png"
                    alt="Công ty suất ăn công nghiệp"
                    className="d-block w-100"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    src="storage/image/393/uLz0aG6uUh5IBQsPYTCvIETahaNJlFSHsxmdnDRm.jpeg"
                    alt="Suất ăn công nghiệp Hạnh Phúc"
                    className="d-block w-100"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    src="storage/image/151/Ji0sZiSR6KFVaowEroYNfKxtKmPOj6J33aIyKuQO.jpeg"
                    alt="Banner Suất ăn công nghiệp Hạnh Phúc"
                    className="d-block w-100"
                    />
                </div>
                <div className="carousel-item">
                    <a href="vi/su-khac-biet#" target="_blank" title="Banner 1 Suất ăn công nghiệp Hạnh Phúc">
                    <img
                        src="storage/image/394/zIyWA6UipcDlJK9yuWYqd8xR3BWKle8itQU8L5xa.jpeg"
                        alt="Banner 1 Suất ăn công nghiệp Hạnh Phúc"
                        className="d-block w-100"
                    />
                    </a>
                </div>
                <div className="carousel-item">
                    <img src="storage/image/430/8lt0AurmamXDdjPoV80ixMsFhfSrjj1B8JUw35Up.jpeg" alt="Bò tơ quán mộc" className="d-block w-100" />
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