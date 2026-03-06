import Link from "next/link";
import Image from "next/image";
import logo from "@/public/imgs/logo-h.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top fixed" id="primary-navbar">
      <div className="container">
        <Link className="navbar-brand" href="/" title="Suất ăn công nghiệp Hạnh Phúc">
          <Image src={logo} alt="Suất ăn công nghiệp Hạnh Phúc" />
        </Link>
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
              <Link className="nav-link active" aria-current="page" href="/">
                Trang chủ
              </Link>
            </li>

            <li className="nav-item dropdown lang-menu">
              <Link
                className="nav-link dropdown-toggle text-uppercase"
                href="about#"
                id="navbarDropdownAbout"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="Giới thiệu"
              >
                Giới thiệu
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                <li>
                  <Link className="dropdown-item" href="/about" title="Lời nói đầu">
                    Lời nói đầu
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/vision" title="Tầm nhìn sứ mệnh">
                    Tầm nhìn sứ mệnh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/value" title="Giá trị cốt lõi">
                    Giá trị cốt lõi
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/diagram" title="Sơ đồ tổ chức">
                    Sơ đồ tổ chức
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/scale" title="Quy mô Hạnh Phúc">
                    Quy mô HẠNH PHÚC
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/cert" title="Chứng chỉ chất lượng, bảo hiểm">
                    Chứng chỉ chất lượng, bảo hiểm
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" href="/suppliers" title="Hồ sơ các nhà phân phối">
                    Hồ sơ các nhà phân phối
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/suppliers/gao">
                        Gạo
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/suppliers/raucuqua">
                        Rau, củ, quả
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/suppliers/thitlon">
                        Thịt lợn
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/banhcosy">
                        Bánh cosy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/banhtuoi">
                        Bánh tươi
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/bunpho">
                        Bún phở
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/dauphu">
                        Đậu phụ
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/giavi">
                        Gia vị
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/giochalon">
                        Giò, chả
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/thitga">
                        Thịt gà
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/thuyhaisan">
                        Thủy hải sản
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/suppliers/trung">
                        Trứng
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown lang-menu">
              <Link
                className="nav-link dropdown-toggle text-uppercase"
                href="#"
                id="navbarDropdownServices"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dịch vụ
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownServices">
                <li>
                  <Link className="dropdown-item" href="industrial-catering-service" title="Cung cấp suất ăn công nghiệp">
                    Cung cấp suất ăn công nghiệp
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="food-delivery-service" title="Dịch vụ cung cấp thực phẩm">
                    Dịch vụ cung cấp thực phẩm
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="recruitment" title="Tuyển dụng">
                Tuyển dụng
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="customer" title="Khách hàng">
                Khách hàng
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact" title="Liên hệ">
                Liên hệ
              </Link>
            </li>
          </ul>

          {/* <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown lang-menu">
                        <Link
                        rel="nofollow noopener"
                        className="nav-link dropdown-toggle text-uppercase"
                        href="vi/su-khac-biet#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        title="Lựa chọn ngôn ngữ"
                        >
                        <Image src={flagvi} height={18} alt="Lựa chọn quốc gia" />
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link rel="nofollow noopener alternate" className="dropdown-item" hrefLang="en" href="en" title="English">
                            <Image src={flagen} className="lang-ico" alt="English" height={18} />
                            English
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow noopener alternate" className="dropdown-item" hrefLang="vi" href="vi/su-khac-biet" title="Tiếng Việt">
                            <Image src={flagvi} className="lang-ico" alt="Tiếng Việt" height={18} />
                            Tiếng Việt
                            </Link>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div> */}
        </div>
      </div>
    </nav>
  );
}
