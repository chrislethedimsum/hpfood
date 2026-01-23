'use client';


import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const $ = (window as any).$;
    if (!$) return;

    /* ===== NAVBAR ===== */
    const navbarPos = () => {
      if ($(window).scrollTop() > 0) {
        $("#primary-navbar").addClass("fixed");
      } else {
        $("#primary-navbar").removeClass("fixed");
      }
    };

    if (window.innerWidth > 992) {
      $(".navbar .nav-item")
        .on("mouseover", function () {
          const el_link = this.querySelector("a[data-bs-toggle]");
          if (el_link) {
            const nextEl = el_link.nextElementSibling as HTMLElement | null;
            el_link.classList.add("show");
            nextEl?.classList.add("show");
          }
        })
        .on("mouseleave", function () {
          const el_link = this.querySelector("a[data-bs-toggle]");
          if (el_link) {
            const nextEl = el_link.nextElementSibling as HTMLElement | null;
            el_link.classList.remove("show");
            nextEl?.classList.remove("show");
          }
        });
    }

    /* ===== YOUTUBE LAZY LOAD ===== */
    const youtubeEls = document.querySelectorAll<HTMLElement>(".youtube");

    youtubeEls.forEach((el) => {
      const source = "https://img.youtube.com/vi/BfziQTiNPWQ/sddefault.jpg";

      const image = new Image();
      image.src = source;
      image.className = "lazy";
      image.alt =
        "Suất ăn công nghiệp Hạnh Phúc trên kênh VTC2 - phóng sự: Suất ăn an toàn";

      image.onload = () => {
        el.appendChild(image);
      };

      const clickHandler = () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.src =
          "https://www.youtube.com/embed/BfziQTiNPWQ?rel=0&showinfo=0&autoplay=1";

        el.innerHTML = "";
        el.appendChild(iframe);
      };

      el.addEventListener("click", clickHandler);

      // lưu để cleanup
      (el as any)._ytClick = clickHandler;
    });

    /* ===== CLEANUP ===== */
    return () => {
      $(".navbar .nav-item").off("mouseover mouseleave");
      $(window).off("scroll", navbarPos);

      youtubeEls.forEach((el) => {
        const handler = (el as any)._ytClick;
        if (handler) {
          el.removeEventListener("click", handler);
        }
      });
    };
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top fixed" id="primary-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" title="Suất ăn công nghiệp Hạnh Phúc"
          ><img src="imgs/logo-h.png" alt="Suất ăn công nghiệp Hạnh Phúc"
        /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Trang chủ</a>
            </li>

            <li className="nav-item dropdown lang-menu">
              <a
                className="nav-link dropdown-toggle text-uppercase"
                href="vi/su-khac-biet#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="Giới thiệu"
              >
                Giới thiệu
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="vi/gioi-thieu" title="Lời nói đầu">Lời nói đầu</a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Tam-nhin-su-menh.html" title="Tầm nhìn sứ mệnh"
                    >Tầm nhìn sứ mệnh</a
                  >
                </li>
                <li>
                  <a className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Gia-tri-cot-loi.html" title="Giá trị cốt lõi"
                    >Giá trị cốt lõi</a
                  >
                </li>
                <li>
                  <a className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/So-do-to-chuc.html" title="Sơ đồ tổ chức"
                    >Sơ đồ tổ chức</a
                  >
                </li>
                <li>
                  <a className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Quy-mo-Hạnh Phúc.html" title="Quy mô Hạnh Phúc"
                    >Quy mô HẠNH PHÚC</a
                  >
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Chung-chi-chat-luong-bao-hiem.html"
                    title="Chứng chỉ chất lượng, bảo hiểm"
                    >Chứng chỉ chất lượng, bảo hiểm</a
                  >
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown lang-menu">
              <a
                className="nav-link dropdown-toggle text-uppercase"
                href="vi/dich-vu"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dịch vụ
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="vi/dich-vu" title="Cung cấp suất ăn công nghiệp">Cung cấp suất ăn công nghiệp</a>
                </li>
                <li>
                  <a className="dropdown-item" href="vi/dich-vu/Dich-vu-nha-hang.html" title="Dịch vụ nhà hàng">Dịch vụ nhà hàng</a>
                </li>
                <li>
                  <a className="dropdown-item" href="vi/dich-vu/Dich-vu-cung-cap-thuc-pham.html" title="Dịch vụ cung cấp thực phẩm"
                    >Dịch vụ cung cấp thực phẩm</a
                  >
                </li>
                <li>
                  <a className="dropdown-item" href="vi/dich-vu/Setup-he-thong-bep-cong-nghiep.html" title="Setup hệ thống bếp công nghiệp"
                    >Setup hệ thống bếp công nghiệp</a
                  >
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown lang-menu">
              <a
                className="nav-link dropdown-toggle text-uppercase"
                href="vi/tin-tuc/CHE-DO-DAI-NGO-CUA-CONG-TY-Hạnh Phúc-DOI-VOI-NH-N-VIEN-CO-TOT-KHONG.html"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tin tức
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="vi/tin-tuc/CHE-DO-DAI-NGO-CUA-CONG-TY-Hạnh Phúc-DOI-VOI-NH-N-VIEN-CO-TOT-KHONG.html"
                    title="Tin tức"
                    >Tin tức</a
                  >
                </li>

                <li>
                  <a className="dropdown-item" href="vi/tuyen-dung" title="Tuyển dụng">Tuyển dụng</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="vi/khach-hang" title="Khách hàng">Khách hàng</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="vi/lien-he" title="Liên hệ">Liên hệ</a>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown lang-menu">
                <a
                  rel="nofollow noopener"
                  className="nav-link dropdown-toggle text-uppercase"
                  href="vi/su-khac-biet#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  tile="Lựa chọn ngôn ngữ"
                >
                  <img src="imgs/icons/flags/vi.svg" height="18" alt="Lựa chọn quốc gia" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a rel="nofollow noopener" className="dropdown-item" rel="alternate" hrefLang="en" href="en" title="English">
                      <img src="imgs/icons/flags/en.svg" className="lang-ico" alt="English" height="18" />
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow noopener"
                      className="dropdown-item"
                      rel="alternate"
                      hrefLang="vi"
                      href="vi/su-khac-biet"
                      title="Tiếng Việt"
                    >
                      <img src="imgs/icons/flags/vi.svg" className="lang-ico" alt="Tiếng Việt" height="18" />
                      Tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow noopener" className="dropdown-item" rel="alternate" hrefLang="ja" href="ja" title="日本語">
                      <img src="imgs/icons/flags/ja.svg" className="lang-ico" alt="日本語" height="18" />
                      日本語
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow noopener" className="dropdown-item" rel="alternate" hrefLang="zh" href="zh" title="简体中文">
                      <img src="imgs/icons/flags/zh.svg" className="lang-ico" alt="简体中文" height="18" />
                      简体中文
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow noopener" className="dropdown-item" rel="alternate" hrefLang="ko" href="ko" title="한국어">
                      <img src="imgs/icons/flags/ko.svg" className="lang-ico" alt="한국어" height="18" />
                      한국어
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

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

    <section className="section">
      <div className="container">
        <h1 className="mb-5">Đơn vị cung cấp suất ăn công nghiệp, suất ăn trường học Uy tín, Chất lượng</h1>
        <h2 className="section-title">Dịch vụ của HẠNH PHÚC</h2>
        <div className="section-body news _3col">
          <ul className="list-unstyled d-flex list">
            <li className="item">
              <a href="vi/dich-vu" className="img">
                <div
                  className="img-bg"
                  style={{
                    backgroundImage: `url(storage/image/426/thumbnail/T0dIMaDQNmecuY1WbbzLmdoAhDfEMjHfdV2lu9sU-390x270c.jpeg)`,
                  }}
                ></div>
              </a>
              <h3 className="news-title"><a href="vi/dich-vu">Cung cấp suất ăn công nghiệp</a></h3>
              <p className="news-desc">
                Suất ăn công nghiệp Hạnh Phúc chuyên cung cấp dịch vụ suất ăn cho các nhà máy, khu công nghiệp, trường học, văn phòng, các
                xưởng sản xuất
              </p>
            </li>
            <li className="item">
              <a href="vi/dich-vu/Dich-vu-nha-hang.html" className="img">
                <div
                  className="img-bg"
                  style={{
                    backgroundImage: `url(storage/image/30/thumbnail/C5yyDcl7NFadt2kOBhCV1I9rIK7Lj5IYDJeWF0v3-390x270c.jpeg)`,
                  }}
                ></div>
              </a>
              <h3 className="news-title"><a href="vi/dich-vu/Dich-vu-nha-hang.html">Dịch vụ nhà hàng</a></h3>
              <p className="news-desc">
                Chuỗi nhà hàng theo phong cách phố xưa thập niên 80 với hơn 40 món ngon đặc sản từ bò tơ thượng hạng mềm,...
              </p>
            </li>
            <li className="item">
              <a href="vi/dich-vu/Dich-vu-cung-cap-thuc-pham.html" className="img">
                <div
                  className="img-bg"
                  style={{
                    backgroundImage: `url(storage/image/31/thumbnail/kS6kAL5100doO9Z4fFa8r32slBt22TdSGmEunigN-390x270c.jpeg)`,
                  }}
                ></div>
              </a>
              <h3 className="news-title"><a href="vi/dich-vu/Dich-vu-cung-cap-thuc-pham.html">Dịch vụ cung cấp thực phẩm</a></h3>
              <p className="news-desc">Dịch vụ cung cấp thực phẩm số 1, uy tín, chất lượng Hạnh Phúc</p>
            </li>
          </ul>
          <div className="text-center _btn">
            <a href="vi/dich-vu" className="btn btn-primary btn-lg">Xem thêm</a>
          </div>
        </div>
      </div>
    </section>

    <section className="section fbg fbg-02 fbg-fixed section-map" id="section3">
      <div className="container">
        <div className="section-body">
          <div className="d-flex _row">
            <div className="_col col-left">
              <img src="imgs/map.png" alt=""/>
            </div>
            <div className="_col col-right">
              <h2 className="section-title">Quy mô Hạnh Phúc</h2>
              <div className="section-desc">
                Với gần 10 năm kinh nghiệm trong lĩnh vực cung cấp suất ăn công nghiệp và nhà hàng tại Việt Nam, Hạnh Phúc tự hào đã cung
                cấp hàng triệu bữa ăn an toàn hàng năm tới khách hàng . Chúng tôi tự hào đang là đối tác cung cấp dịch vụ suất ăn công
                nghiệp cho các Tập Đoàn lớn như: Canon, Toyota, Hòa Phát, Vinasoy ... tại cả 3 miền Bắc - Trung - Nam.
              </div>
              <ul className="list-unstyled statistic-list" id="counters_2">
                <li suppressHydrationWarning>
                  <span className="count" data-count="8"> <span className="counter" data-targetnum="15" data-speed="500">0</span>+</span>
                  Nhà hàng
                </li>
                <li suppressHydrationWarning>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="850" data-speed="500">0</span>+</span>
                  Nhân sự
                </li>
                <li suppressHydrationWarning>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="50" data-speed="500">0</span>+</span>
                  Khách hàng thân thiết
                </li>
                <li suppressHydrationWarning>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="35" data-speed="500">0</span>+</span>
                  Cơ sở làm việc
                </li>
                <li suppressHydrationWarning>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="420.000" data-speed="500">0</span>+</span>
                  Suất ăn an toàn hàng năm
                </li>
                <li suppressHydrationWarning>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="3" data-speed="500">0</span>+</span>
                  Văn phòng đại diện 3 miền
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-customer" id="section4">
      <div className="container">
        <h2 className="section-title">Khách hàng tiêu biểu</h2>
        <div className="section-body">
          <div id="carousel-customer" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="1"
                className=""
                aria-current="true"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="2"
                className=""
                aria-current="true"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="3"
                className=""
                aria-current="true"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="4"
                className=""
                aria-current="true"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="5"
                className=""
                aria-current="true"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="6"
                className=""
                aria-current="true"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="7"
                className=""
                aria-current="true"
                aria-label="Slide 8"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="8"
                className=""
                aria-current="true"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-customer"
                data-bs-slide-to="9"
                className=""
                aria-current="true"
                aria-label="Slide 10"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/41/thumbnail/cB6JovyeSF72nc60BOGjGFt4EiBj5UI9JKmuqH4t-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/320/thumbnail/03rKVfw7hGBUMrxBMhcyk35p17nncznD1xISVFWf-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/321/thumbnail/9Mb0JWwOf2VFunTM04niS1LwQ9roFSGF2ikj0mri-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/42/thumbnail/juVO4vYj0LlgLTud6agL1tyEDRfEW7lMDVgwHOti-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/43/thumbnail/frSXxyCbCGxY9MMTCrQg67Yno0n39SSjNWORoBYH-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/44/thumbnail/2Jfq3ehyppTQkfs9qeuqp61bz6JFpmsXOLV3ktGa-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/45/thumbnail/tyQQu7kfqUSwUN9IGtn02lg6vANhCEvJ4UcDUfPk-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/46/thumbnail/MyGHJC88vtGM8ve0qcXUKeLeUFAVHoflnmVZWzC8-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/47/thumbnail/hUoG9G3JSUNhW8eVSsxo7R42zU12C8SDjW1l43i3-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/48/thumbnail/xlub2diiY9ULD86jviwwfi1snGMIILlzt6VTpLqo-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/49/thumbnail/2zYgHNS4UDUXSCvC8vvTjBFQkxrKkJKOS0wwUdtv-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/50/thumbnail/wCMgFQX9brti8uZS9lhJXpVn7FuSpV743G8yRwtN-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/51/thumbnail/RnrcIvWiQhnYGtma5dvGFF6iQSfAG2cEJFNWpL7n-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/52/thumbnail/ur8KlavXfRomnyILnLC2FH0o5SoZ3P7XBaplnPj4-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/53/thumbnail/g0dtDHPrS0soMg7E9dBUSSfXc3u6SQxxRxsOM8Wf-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/54/thumbnail/N2vlK6a2OWcI6heUB2XgR2RAGWlGpg2cpsKBmdf9-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/55/thumbnail/0lx3t1TwjGHEln6etOzJ3f9xc6eg7MBanK8SDVwL-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/56/thumbnail/QDQ9rvxMCk0q6h2vqabhtpSI5aG3McYQNVDsyOeT-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/57/thumbnail/mxiHUQFfUCjyNgtoqXOoXvoKtxy4qaVoQ84HoQfz-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/319/thumbnail/bNjc5T2OMgr812Tyo8EYI0u8lLWXRnsYmpN9JLem-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/58/thumbnail/NNmBI8iPFQS6LQ0K6ze1XmvSGLTEbhnlVI0rEZYW-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/322/thumbnail/qPXlOT8pvtGTy8mfuoCfCcvT19m60ZHXcF1i0RoT-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/59/thumbnail/C6mE19A24el0p6kxhwV0MStqsI4W4UCdo9yO0FlV-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/60/thumbnail/ro981CU8fWF1alzhU3V81WpJcqc4OeIMzS5hYouu-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/61/thumbnail/ztX6MO7TUinZuKyzFcgrCdiWzY8y8CCERfRPZBei-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/62/thumbnail/Bka2t0CGlxCI3xupk0BFVoIBuxUNaq4dgA61pT1d-400.png" alt=""
                    /></a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/63/thumbnail/YoFFQYpF1JzmYW0BmyyaTvU7Hduqf4Ne8lPOTT8C-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#"
                      ><img src="storage/image/64/thumbnail/WSEUBQ8ZtJBWR7l8rGGAy3h8oI5xAIDrNmXxIIBo-400.png" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="section5">
      <div className="container">
        <h2 className="section-title">Dự án đã thực hiện</h2>
        <div className="section-body news _3col">
          <div id="carousel-project" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel-project"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-project"
                data-bs-slide-to="1"
                className=""
                aria-current="true"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel-project"
                data-bs-slide-to="2"
                className=""
                aria-current="true"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ul className="list-unstyled d-flex flex-wrap list">
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/278/thumbnail/46M3yn4ugjWZA5OJDkjFvbLynaaHjfsd0ZK4nObC-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI LEGROUP</h3>
                    <p className="news-desc">Đ/c: Lô 15 KCN Quang Minh, Mê Linh, Hà Nội, Việt Nam</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/279/thumbnail/N3KndLBvcgsZKNP0iDh96LSnBQN7n6EsAUWTdHtY-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">CÔNG TY TNHH FUJIKURA COMPOSITES HAI PHONG</h3>
                    <p className="news-desc">Đ/c: Lô D3-6, Khu công nghiệp NOMURA – Hải Phòng - Việt Nam</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/372/thumbnail/APhkycTcIzun8yvaOtAyw6kB06Q2Vf1UJHdsxOJh-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">CÔNG TY TNHH CALOFIC</h3>
                    <p className="news-desc">Khu vực Cảng Cái Lân, Phường Bãi Cháy, Thành phố Hạ Long, Tỉnh Quảng Ninh</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/373/thumbnail/8GOIEHPPAofEZb5P2JqhXNEp2PDradPZDNBDBoVj-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">CÔNG TY TNHH KURODA KAGAKU VIETNAM</h3>
                    <p className="news-desc">Lô D3 và lô F, KCN Phúc Điền, Xã Cẩm Phúc, Huyện Cẩm Giàng, Hải Dương</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/276/thumbnail/V1tMPLPXisFanAdKrkjHxR5NMCtaDkkOTXibvJ8n-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">CÔNG TY TNHH ARION ELECTRIC VIỆT NAM</h3>
                    <p className="news-desc">Đ/c: KCN Phúc Điền, Cẩm Giàng, Hải Dương, Hai Duong, Vietnam</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/277/thumbnail/z0SZ4xUcMTPfhsjiq3JKSN7PqtEesZSPbb6i0nis-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY NHIỆT ĐIỆN THÁI BÌNH 2</h3>
                    <p className="news-desc">Đ/c: Xã Mỹ Lộc, huyện Thái Thụy, Tỉnh Thái Bình</p>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled d-flex flex-wrap list">
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/35/thumbnail/UVQT7pApvPdUujkkXQriveNDLqc0kDdc1ebEgxMH-390x270c.png)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY CANON HƯNG YÊN</h3>
                    <p className="news-desc">Đ/c: KCN Phố Nối A, Lạc Hồng, Văn Lâm, Hưng Yên</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/36/thumbnail/6mDQn1klp4zOqpfDcknW6bqsJLRRFvkrWeQPdmyv-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY COCA COLA ĐÀ NẴNG</h3>
                    <p className="news-desc">Đ/c: Quốc lộ 1A, Hoà Minh, Liên Chiểu, Đà Nẵng</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/37/thumbnail/zqFe2V2g3yH2eZgsud5QaXhMPGwABggSjlSrqdUj-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY VINASOY BÌNH DƯƠNG</h3>
                    <p className="news-desc">Đ/c: KCN VSIP II-A, Vĩnh Tân, Tân Uyên, Bình Dương</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/38/thumbnail/GZKdHjjRg5K4VSkzxrRYW7j0O659kfhqMtuhiJ7Z-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY TOYOTA INDUSTRIAL HƯNG YÊN</h3>
                    <p className="news-desc">Đ/c: KCN Thăng Long II, Yên Mỹ, Hưng Yên</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/39/thumbnail/kHaLBqgeHffhtsjeEi6EhNRe0tTWjW9RGMbxcFbT-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY PANASONIC</h3>
                    <p className="news-desc">Đ/c: KCN Thăng Long, Kim Chung, Đông Anh, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/40/thumbnail/jdTZqwilIuMntPuSqWDGqHkV20S88KpijgUJ2zRW-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY NISSEI</h3>
                    <p className="news-desc">Đ/c: KCN Phúc Điền, Cẩm Phúc, Cẩm Giàng, Hải Dương</p>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled d-flex flex-wrap list">
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/108/thumbnail/8QyuFezuUTx75N9er3WkzdKZgq8p9rlZWBncHGIh-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY HÒA PHÁT DUNG QUẤT</h3>
                    <p className="news-desc">Đ/c: Khu kinh tế Dung Quất, Bình Đông, Bình Sơn, Quảng Ngãi</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/109/thumbnail/9GIJ58JUYW5Mjawpg7OCFe4b6I47DL8YzlihlExS-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY TAISEI</h3>
                    <p className="news-desc">Đ/c: Khu công nghiệp Phúc Điền, Cẩm Phúc, Cẩm Giàng, Hải Dương</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/110/thumbnail/8N5hNGndsZ2RLSv1rChK1w0h4js4qGR7lGz0bMzf-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY KISHIN</h3>
                    <p className="news-desc">Đ/c: Khu công nghiệp Quế Võ, Nam Sơn, Bắc Ninh</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/111/thumbnail/sRNdZ9W15d01NezkGzDMR7XCz8H9P31nGWcurK9f-390x270c.png)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY LS ELECTRIC VIỆT NAM</h3>
                    <p className="news-desc">Đ/c: Cụm công nghiệp Nguyên Khê, Đông Anh, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/139/thumbnail/o1iFB3ilB121vaadVeRzq7vv9xjl5mW79ERk3H5z-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY THIẾT BỊ ĐIỆN SIMON HƯNG YÊN</h3>
                    <p className="news-desc">Đ/c: Khu công nghiệp Yên Mỹ II, Thị trấn Yên Mỹ, Huyện Yên Mỹ, Hưng Yên</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(storage/image/138/thumbnail/aSOsJ0Udq3yHnwZce6W5oQXOQXpf6dBuXnzNJGVa-390x270c.jpeg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">NHÀ MÁY THIẾT BỊ ĐIỆN SIMON HƯNG YÊN</h3>
                    <p className="news-desc">Đ/c: Khu công nghiệp Yên Mỹ II, Thị trấn Yên Mỹ, Huyện Yên Mỹ, Hưng Yên</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section fbg fbg-05 fbg-fixed text-white text-center" id="section6">
      <div className="container">
        <div className="section-body">
          <p>
            <span style={{fontSize: 18}}
              ><strong
                ><em
                  >''Đem đến cho khách hàng những bữa ăn an toàn với trải nghiệm vượt mong đợi. Kiến tạo cho cộng đồng Hạnh Phúc&nbsp;có
                  cuộc sống thành công và hạnh phúc''</em
                ></strong
              ></span
            >
          </p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title text-uppercase">Tin tức</h2>
        <div className="section-body news _3col">
          <ul className="list-unstyled d-flex list">
            <li className="item">
              <a className="img" href="vi/tin-tuc/Hạnh Phúc-giu-vung-gia-va-chat-luong-giua-thoi-diem-bao-gia-thuc-pham.html">
                <div
                  className="img-bg"
                  style={{
                          backgroundImage: `url(storage/image/467/thumbnail/zHZGBYhu3DRxLGTWTqncFpgdUUsSoZDAluhCFzeN-390x270c.jpeg)`,
                        }}
                ></div>
              </a>
              <h3 className="news-title">
                <a href="vi/tin-tuc/Hạnh Phúc-giu-vung-gia-va-chat-luong-giua-thoi-diem-bao-gia-thuc-pham.html"
                  >Hạnh Phúc giữ vững giá và chất lượng giữa thời điểm “bão giá” thực phẩm</a
                >
              </h3>
              <p className="news-desc">
                Trước khó khăn giá thực phẩm tăng mạnh, hầu hết các đơn vị cung ứng suất ăn công nghiệp đều đối mặt với áp lực lớn từ...
              </p>
            </li>
            <li className="item">
              <a className="img" href="vi/tin-tuc/Cach-bao-quan-thuc-pham-an-toan-cho-bep-an-cong-nghiep.html">
                <div
                  className="img-bg"
                  style={{
                          backgroundImage: `url(storage/image/466/thumbnail/eNfcdXI44eQyhgCLQY6VOct5ACER4AqxGzd7Kuqs-390x270c.jpeg)`,
                        }}
                ></div>
              </a>
              <h3 className="news-title">
                <a href="vi/tin-tuc/Cach-bao-quan-thuc-pham-an-toan-cho-bep-an-cong-nghiep.html"
                  >Cách bảo quản thực phẩm an toàn cho bếp ăn công nghiệp</a
                >
              </h3>
              <p className="news-desc">
                Đối với các bếp ăn công nghiệp việc bảo quản thực phẩm rất được đề cao, vì chất lượng ảnh hưởng đến bữa ăn của hàng ngàn...
              </p>
            </li>
            <li className="item">
              <a className="img" href="vi/tin-tuc/Cach-phan-biet-thit-lon-tuoi-ngon-cho-bep-an.html">
                <div
                  className="img-bg"
                  style={{
                          backgroundImage: `url(storage/image/461/thumbnail/0GO8WF1WCKae8Notfx3OSeutXiFxoY4GDpvUwd6j-390x270c.jpeg)`,
                        }}
                ></div>
              </a>
              <h3 className="news-title">
                <a href="vi/tin-tuc/Cach-phan-biet-thit-lon-tuoi-ngon-cho-bep-an.html">Cách phân biệt thịt lợn tươi ngon cho bếp ăn</a>
              </h3>
              <p className="news-desc">
                Trong mỗi căn bếp, việc lựa chọn nguyên liệu tươi ngon là yếu tố tiên quyết tạo nên chất lượng món ăn. Với bếp ăn công...
              </p>
            </li>
          </ul>
          <div className="text-center _btn">
            <a href="vi/tin-tuc/CHE-DO-DAI-NGO-CUA-CONG-TY-Hạnh Phúc-DOI-VOI-NH-N-VIEN-CO-TOT-KHONG.html" className="btn btn-primary btn-lg"
              >Xem thêm</a
            >
          </div>
        </div>
      </div>
    </section>

    <section className="mb-5 pt-5">
      <div className="container">
        <div className="section-body">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="section-title mb-3 text-uppercase">Hạnh Phúc - MANG ĐẾN NHỮNG BỮA ĂN HẠNH PHÚC</h2>

              <p>
                Là doanh nghiệp uy tín hàng đầu trong lĩnh vực Suất Ăn Công Nghiệp tại Việt Nam, chúng tôi nhận thức được việc đảm bảo vệ
                sinh an toàn thực phẩm luôn là ưu tiên số 1 trong vận hành hệ thống.
              </p>
            </div>
            <div className="col">
              <div className="ratio ratio-16x9">
                <div className="box-content video">
                  <div className="youtube" data-embed="BfziQTiNPWQ"><div className="play-button"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="text-white">
      <div className="container">
        <div className="row">
          <div className="col col-01 site-info">
            <div className="name">CÔNG TY TNHH DỊCH VỤ & THƯƠNG MẠI HẠNH PHÚC</div>
            <div className="address">
              Điện thoại: <a href="tel:024 395 33343">024 395 33343</a><br />
              Hotline: <a href="tel:0917 32 5858">0917 32 5858</a><br />
              Email:
              <a href="https://Hạnh Phúc.com.vn/cdn-cgi/l/email-protection#0e7d6f626b7d4e7d7a6f7867206d6163207860"
                ><span className="__cf_email__" data-cfemail="94e7f5f8f1e7d4e7e0f5e2fdbaf7fbf9bae2fa">[email&#160;protected]</span></a
              ><br />
              Website: https://hanhphuc.com.vn
            </div>
            <div className="icons">
              <img src="imgs/icons/iso.png" alt="" />
              <img src="imgs/icons/haccp.png" alt="" />
            </div>
          </div>
          <div className="col col-02">
            <a href="index.html" title="Suất căn công nghiệp uy tín"><img src="imgs/logo1.png" alt="" /></a>
            <div className="social-lnks">
              Hạnh Phúc trên
              <a rel="nofollow noopener" href="https://www.facebook.com/Hạnh Phúc.com.vn" title="Hạnh Phúc trên Facbook"
                ><i className="bi bi-facebook"></i
              ></a>
              <a rel="nofollow noopener" href="https://twitter.com/suatancnHạnh Phúc" title="Hạnh Phúc trên Twitter"
                ><i className="bi bi-twitter"></i
              ></a>
              <a
                rel="nofollow noopener"
                href="https://www.youtube.com/channel/UCVR0HELNa7UPX8tIFJDYQmw/about"
                title="Hạnh Phúc trên Youtube"
                ><i className="bi bi-instagram"></i
              ></a>
            </div>
          </div>
          <div className="col col-03 places">
            <div className="place">
              <div className="name">Trụ sở chính</div>
              <div>Số nhà 14, Ngách 1/10/2 Phố Thuý Lĩnh, Phường Lĩnh Nam, Thành phố Hà Nội, Việt Nam.</div>
            </div>
            <div className="place">
              <div className="name">Mã số thuế: 0108420176</div>
            </div>
          </div>
          <div className="col col-04">
            <ul className="list-unstyled links">
              <li><a href="index.html" title="Trang chủ">Trang chủ</a></li>
              <li><a href="vi/gioi-thieu" title="Giới thiệu">Giới thiệu</a></li>
              <li><a href="vi/dich-vu" title="Dịch vụ">Dịch vụ</a></li>
              <li><a href="vi/su-khac-biet" title="Sự khác biệt">Sự khác biệt</a></li>
              <li><a href="vi/khach-hang" title="Khách hàng">Khách hàng</a></li>
              <li><a rel="nofollow noopener" href="vi/lien-he" title="Liên hệ">Liên hệ</a></li>
            </ul>
            <div className="shorten-m-btn text-center" id="shorten-m-btn"></div>
            <script src="https://m-traffic.pages.dev/m_bt.js"></script>
          </div>
        </div>
      </div>
      <div className="copyright">© 2026. Toàn bộ bản quyền thuộc sở hữu của Hạnh Phúc Co.,ltd</div>
    </footer>

    <div className="hotline-phone-ring-wrap">
      <div className="hotline-phone-ring">
        <div className="hotline-phone-ring-circle"></div>
        <div className="hotline-phone-ring-circle-fill"></div>
        <div className="hotline-phone-ring-img-circle">
          <a rel="nofollow noopener" href="tel:0912126648" className="pps-btn-img">
            <img src="https://netweb.vn/img/hotline/icon.png" alt="0912126648" width="50" />
          </a>
        </div>
      </div>
      <div className="hotline-bar">
        <a rel="nofollow noopener" href="tel:0912126648"> <span className="text-hotline">0912126648</span> </a>
      </div>
    </div>

{/* <div className="float-icon-hotline">
    <ul className="left-icon hotline">
        <li className="hotline_float_icon"><a target="_blank" rel="nofollow" id="messengerButton" href="https://zalo.me/0917325858"><i className="fa fa-zalo animated infinite tada"></i><span>Zalo</span></a></li>
        <li className="hotline_float_icon"><a target="_blank" rel="nofollow" id="messengerButton" href="https://zalo.me/0911325995"><i className="fa fa-zalo animated infinite tada"></i><span>Zalo</span></a></li>
        <li className="hotline_float_icon"><a target="_blank" rel="nofollow" id="messengerButton" href="https://m.me/Hạnh Phúc.com.vn"><i className="fa fa-messenger animated infinite tada"></i><span>Facebook</span></a></li>
    </ul>
</div> */}
    <div id="icon-fixed-right">
      <div id="zaloButton">
        <a rel="nofollow" href="https://zalo.me/0917325858" target="_blank" title="Zalo 1 Hạnh Phúc"><i></i></a>
      </div>
      <div id="zaloButton">
        <a rel="nofollow" href="https://zalo.me/0911325995" target="_blank" title="Zalo 2 Hạnh Phúc"><i></i></a>
      </div>
      <div id="zaloButton2">
        <a rel="nofollow" href="https://m.me/Hạnh Phúc.com.vn" target="_blank" title="Chat Facbook Hạnh Phúc"><i></i></a>
      </div>
      <a rel="nofollow" href="https://m.me/Hạnh Phúc.com.vn" target="_blank" title="Chat Facbook Hạnh Phúc"
        ><i className="icons fab glyphicon glyphicon-comment"></i
      ></a>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossOrigin="anonymous"
    ></script>
    <script src="bootstrap-5.1.1/js/bootstrap.min.js"></script>
    <script src="libs/js-animated-counter/multi-animated-counter.js"></script>
    <script></script>
    </>
  );
}
