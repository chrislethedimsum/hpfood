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
        .on("mouseover", function (this: HTMLElement) {
          const el_link = this.querySelector("a[data-bs-toggle]");
          if (el_link) {
            const nextEl = el_link.nextElementSibling as HTMLElement | null;
            el_link.classList.add("show");
            nextEl?.classList.add("show");
          }
        })
        .on("mouseleave", function (this: HTMLElement) {
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
                Với gần <b>10 năm kinh nghiệm</b> trong lĩnh vực cung cấp suất ăn tập thể và dịch vụ nhà hàng tại Việt Nam, <b>Công ty TNHH Dịch 
                Vụ & Thương Mại Hạnh Phúc</b> tự hào là đơn vị đồng hành cùng nhiều trường học và tổ chức trong việc mang đến những <b>bữa ăn an 
                toàn, chất lượng và giàu dinh dưỡng</b>. Mỗi năm, chúng tôi phục vụ hơn <b>4.000 suất ăn</b>, tuân thủ nghiêm ngặt các quy định về <b>vệ sinh 
                an toàn thực phẩm và kiểm soát chất lượng</b>.<br/>
                <br/>
                Hiện nay, <b>Hạnh Phúc</b> đang trực tiếp cung cấp suất ăn cho nhiều trường học cấp 1 và cấp 2 trên địa bàn như  
                <b> Khương Đình, Thanh Xuân Nam, Phan Đình Giót, Phương Liệt, Lý Nam Đế, Kim Giang</b>, với hệ thống <b>10+ cơ sở hoạt động ổn định</b> và 
                đội ngũ <b>hơn 100 nhân sự giàu kinh nghiệm</b>. Chúng tôi không ngừng đầu tư vào <b>quy trình chế biến khép kín, nguồn nguyên 
                liệu rõ ràng, đạt chuẩn</b>, cùng hệ thống quản lý chất lượng chặt chẽ nhằm đảm bảo mỗi bữa ăn đều <b>phù hợp với từng độ tuổi học sinh</b>, góp phần chăm sóc sức khỏe và sự phát triển toàn diện cho các em.
              </div>
              <ul className="list-unstyled statistic-list" id="counters_2">
                <li suppressHydrationWarning={true}>
                  <span className="count" data-count="8"> <span className="counter" data-targetnum="10" data-speed="500">0</span>+</span>
                  Nhà hàng
                </li>
                <li suppressHydrationWarning={true}>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="100" data-speed="500">0</span>+</span>
                  Nhân sự
                </li>
                <li suppressHydrationWarning={true}>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="50" data-speed="500">0</span>+</span>
                  Khách hàng thân thiết
                </li>
                <li suppressHydrationWarning={true}>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="10" data-speed="500">0</span>+</span>
                  Cơ sở làm việc
                </li>
                <li suppressHydrationWarning={true}>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="4000" data-speed="500">0</span>+</span>
                  Suất ăn an toàn hàng năm
                </li>
                <li suppressHydrationWarning={true}>
                  <span className="count" data-count="350"> <span className="counter" data-targetnum="1" data-speed="500">0</span>+</span>
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
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                      <img src="imgs/school/khuongdinhc1.png" alt=""/>
                      <div className="description">Trường Tiểu Học Khương Đình</div>
                    </a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                      <img src="imgs/school/khuongdinhc2.png" alt=""/>
                      <div className="description">Trường THCS Khương Đình</div>
                    </a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                    <img src="imgs/school/kimgiangc2.png" alt=""/>
                    <div className="description">Trường THCS Kim Giang</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                      <img src="imgs/school/lynamdec2.png" alt=""/>
                      <div className="description">Trường THCS Lý Nam Đế</div>
                    </a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                      <img src="imgs/school/phandinhgiotc2.png" alt=""/>
                      <div className="description">Trường THCS Phan Đình Giót</div>
                    </a>
                  </li>
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                      <img src="imgs/school/phuonglietc2.png" alt=""/>
                      <div className="description">Trường THCS Phương Liệt</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="carousel-item">
                <ul className="list-unstyled list d-flex">
                  <li className="_item">
                    <a href="vi/su-khac-biet#">
                      <img src="imgs/school/thanhxuannamc2.png" alt=""/>
                      <div className="description">Trường THCS Thanh Xuân Nam</div>
                    </a>
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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ul className="list-unstyled d-flex flex-wrap list">
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/khuongdinhc1-2.webp)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Tiểu Học Khương Đình</h3>
                    <p className="news-desc">Đ/c: Số 1, Ngõ 108, Bùi Xương Trạch, Phường Khương Đình, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/khuongdinhc2-2.png)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Trung Học Cơ Sở Khương Đình</h3>
                    <p className="news-desc">Đ/c: 16 P. Khương Hạ, Khương Đình, Thanh Xuân, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/kimgiangc2-2.webp)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Trung Học Cơ Sở Kim Giang</h3>
                    <p className="news-desc">Đ/c: Phố Hoàng Đạo Thành, Kim Giang, Thanh Xuân, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/lynamdec2-2.jpg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Trung Học Cơ Sở Lý Nam Đế</h3>
                    <p className="news-desc">Đ/c: Tổ 4 Miêu Nha, Phường Xuân Phương, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/phandinhgiotc2-2.jpg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Trung Học Cơ Sở Phan Đình Giót</h3>
                    <p className="news-desc">Đ/c: Số 3, Phố Nhân Hòa, Thanh Xuân Trung, Thanh Xuân, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/phuonglietc2-2.jpg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Trung Học Cơ Sở Phương Liệt</h3>
                    <p className="news-desc">Đ/c: Ngõ 377, Đường Giải Phóng, Phương Liệt, Thanh Xuân, Hà Nội</p>
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
                          backgroundImage: `url(imgs/school/thanhxuannamc2-2.png)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Trung Học Cơ Sở Thanh Xuân Nam</h3>
                    <p className="news-desc">Đ/c: Ngõ 214 Đường Nguyễn Xiển, Tân Triều, Thanh Xuân, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/hvct.jpg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Học Viện Chính Trị</h3>
                    <p className="news-desc">Đ/c: Số 124, Đường Ngô Quyền, Quang Trung, Hà Đông, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/ktxpv.jpg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Ký Túc xá Pháp Vân - Tứ Hiệp</h3>
                    <p className="news-desc">Đ/c: Toà A6, Khu nhà ở sinh viên Pháp Vân - Tứ Hiệp, P. Trần Thủ Độ, Hoàng Mai, Hà Nội</p>
                  </li>
                  <li className="item">
                    <div className="img">
                      <div
                        className="img-bg"
                        style={{
                          backgroundImage: `url(imgs/school/thanhxuannamc1.jpg)`,
                        }}
                      ></div>
                    </div>
                    <h3 className="news-title">Trường Tiểu Học Thanh Xuân Nam</h3>
                    <p className="news-desc">Đ/c: Ngõ 168, Đường Nguyễn Xiển, Phường Thanh Liệt, Hà Nội</p>
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
    </>
  );
}
