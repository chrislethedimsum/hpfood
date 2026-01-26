import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/imgs/logo-h.png';
import flagvi from '@/public/imgs/icons/flags/vi.svg';
import flagen from '@/public/imgs/icons/flags/en.svg';

export default function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top fixed" id="primary-navbar">
            <div className="container">
                <Link className="navbar-brand" href="index.html" title="Suất ăn công nghiệp Hạnh Phúc">
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
                    <Link className="nav-link active" aria-current="page" href="index.html">
                        Trang chủ
                    </Link>
                    </li>

                    <li className="nav-item dropdown lang-menu">
                    <Link
                        className="nav-link dropdown-toggle text-uppercase"
                        href="vi/su-khac-biet#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        title="Giới thiệu"
                    >
                        Giới thiệu
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <Link className="dropdown-item" href="vi/gioi-thieu" title="Lời nói đầu">
                            Lời nói đầu
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Tam-nhin-su-menh.html" title="Tầm nhìn sứ mệnh">
                            Tầm nhìn sứ mệnh
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Gia-tri-cot-loi.html" title="Giá trị cốt lõi">
                            Giá trị cốt lõi
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/So-do-to-chuc.html" title="Sơ đồ tổ chức">
                            Sơ đồ tổ chức
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Quy-mo-Hạnh Phúc.html" title="Quy mô Hạnh Phúc">
                            Quy mô HẠNH PHÚC
                        </Link>
                        </li>
                        <li>
                        <Link
                            className="dropdown-item"
                            href="https://Hạnh Phúc.com.vn/vi/gioi-thieu/Chung-chi-chat-luong-bao-hiem.html"
                            title="Chứng chỉ chất lượng, bảo hiểm"
                        >
                            Chứng chỉ chất lượng, bảo hiểm
                        </Link>
                        </li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown lang-menu">
                    <Link
                        className="nav-link dropdown-toggle text-uppercase"
                        href="vi/dich-vu"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dịch vụ
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <Link className="dropdown-item" href="vi/dich-vu" title="Cung cấp suất ăn công nghiệp">
                            Cung cấp suất ăn công nghiệp
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="vi/dich-vu/Dich-vu-nha-hang.html" title="Dịch vụ nhà hàng">
                            Dịch vụ nhà hàng
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="vi/dich-vu/Dich-vu-cung-cap-thuc-pham.html" title="Dịch vụ cung cấp thực phẩm">
                            Dịch vụ cung cấp thực phẩm
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" href="vi/dich-vu/Setup-he-thong-bep-cong-nghiep.html" title="Setup hệ thống bếp công nghiệp">
                            Setup hệ thống bếp công nghiệp
                        </Link>
                        </li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown lang-menu">
                    <Link
                        className="nav-link dropdown-toggle text-uppercase"
                        href="vi/tin-tuc/CHE-DO-DAI-NGO-CUA-CONG-TY-Hạnh Phúc-DOI-VOI-NH-N-VIEN-CO-TOT-KHONG.html"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Tin tức
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <Link
                            className="dropdown-item"
                            href="vi/tin-tuc/CHE-DO-DAI-NGO-CUA-CONG-TY-Hạnh Phúc-DOI-VOI-NH-N-VIEN-CO-TOT-KHONG.html"
                            title="Tin tức"
                        >
                            Tin tức
                        </Link>
                        </li>

                        <li>
                        <Link className="dropdown-item" href="vi/tuyen-dung" title="Tuyển dụng">
                            Tuyển dụng
                        </Link>
                        </li>
                    </ul>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" href="vi/khach-hang" title="Khách hàng">
                        Khách hàng
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="vi/lien-he" title="Liên hệ">
                        Liên hệ
                    </Link>
                    </li>
                </ul>
                <div className="d-flex">
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
                </div>
                </div>
            </div>
        </nav>
    );
}
