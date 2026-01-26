export default function Footer() {
    return(
        <>
            <footer className="text-white">
                <div className="container">
                    <div className="row">
                        <div className="col col-01 site-info">
                            <div className="name">CÔNG TY TNHH DỊCH VỤ & THƯƠNG MẠI HẠNH PHÚC</div>
                            <div className="address">
                            Điện thoại: <a href="tel:024 395 33343">024 395 33343</a><br />
                            Hotline: <a href="tel:0917 32 5858">0917 32 5858</a><br />
                            Email:<br />
                            Website: <a href="https://hpfood.info">https://hpfood.info</a>
                            </div>
                            <div className="icons">
                            <img src="imgs/icons/iso.png" alt="" />
                            <img src="imgs/icons/haccp.png" alt="" />
                            </div>
                        </div>
                        <div className="col col-02">
                            <a href="index.html" title="Suất căn công nghiệp uy tín"><img src="imgs/logo-h.png" alt="" /></a>
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
                    <a rel="nofollow" href="https://zalo.me/0912126648" target="_blank" title="Zalo Hạnh Phúc"><i></i></a>
                </div>
                <div id="zaloButton2">
                    <a rel="nofollow" href="https://m.me/hanhphuccompany" target="_blank" title="Chat Facbook Hạnh Phúc"><i></i></a>
                </div>
                <a rel="nofollow" href="https://www.facebook.com/hanhphuccompany/" target="_blank" title="Chat Facbook Hạnh Phúc"
                    ><i className="icons fab glyphicon glyphicon-comment"></i>
                </a>
            </div>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="bootstrap-5.1.1/js/bootstrap.min.js"></script>
            <script src="libs/js-animated-counter/multi-animated-counter.js"></script>
        </>
    );
}