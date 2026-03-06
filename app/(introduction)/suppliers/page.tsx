import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "GIỚI THIỆU HỒ SƠ NHÀ CUNG CẤP",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function AboutUs() {
  return (
    <MainLayout>
      <section className="section news-view">
        <div className="container">
          <div className="section-body text-justify">
            <h1 className="section-title">GIỚI THIỆU HỒ SƠ NHÀ CUNG CẤP</h1>
            <h4 className="section-title">Hệ thống nhà cung cấp của Công ty Hạnh Phúc</h4>
            <p>
              Để đảm bảo{" "}
              <b>
                chất lượng bữa ăn, an toàn vệ sinh thực phẩm và nguồn gốc thực phẩm minh bạch, Công ty TNHH Dịch Vụ và Thương Mại Hạnh Phúc
              </b>{" "}
              xây dựng hệ thống nhà cung cấp được lựa chọn và kiểm soát chặt chẽ theo các tiêu chuẩn về chất lượng và pháp lý.
              <br />
              Tất cả các đơn vị cung cấp nguyên liệu thực phẩm cho Hạnh Phúc đều phải đáp ứng đầy đủ các yêu cầu về:
            </p>
            <ul>
              <li>Nguồn gốc xuất xứ rõ ràng</li>
              <li>Chứng nhận an toàn thực phẩm theo quy định của cơ quan chức năng</li>
              <li>Hệ thống quản lý chất lượng trong sản xuất và cung ứng</li>
              <li>Hồ sơ pháp lý minh bạch, đầy đủ</li>
            </ul>
            <p>Các nhà cung cấp đều ký hợp đồng kinh tế chính thức với Công ty Hạnh Phúc và cung cấp đầy đủ hồ sơ pháp lý bao gồm:</p>
            <ul>
              <li>Giấy chứng nhận đăng ký kinh doanh</li>
              <li>Giấy chứng nhận hệ thống quản lý chất lượng (HACCP / ISO nếu có)</li>
              <li>Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm</li>
              <li>Bản công bố sản phẩm</li>
              <li>Các giấy tờ kiểm định liên quan đến sản phẩm</li>
            </ul>
            <p>
              Những hồ sơ này được
              <b>
                {" "}
                lưu trữ, kiểm tra định kỳ và sẵn sàng cung cấp cho khách hàng, nhà trường, doanh nghiệp hoặc cơ quan quản lý khi cần thiết.
              </b>
              <br />
              Thông qua việc xây dựng chuỗi cung ứng minh bạch và được kiểm soát, Hạnh Phúc cam kết mang đến{" "}
              <b>nguồn thực phẩm an toàn – chất lượng – ổn định</b> cho toàn bộ hệ thống bếp ăn.
            </p>
            <hr />
            <h4 className="section-title">CAM KẾT LỰA CHỌN NHÀ CUNG CẤP</h4>
            <p>
              Công ty Hạnh Phúc luôn đặt <b>an toàn thực phẩm và sức khỏe người sử dụng</b> lên hàng đầu. Vì vậy, các nhà cung cấp của công
              ty được lựa chọn dựa trên những tiêu chí nghiêm ngặt:
            </p>
            <div className="alert alert-primary" role="alert">
              <b>Nguồn gốc rõ ràng</b>
              <br />
              Toàn bộ nguyên liệu thực phẩm đều có nguồn gốc xuất xứ minh bạch, có thể truy xuất khi cần thiết.
            </div>
            <div className="alert alert-secondary" role="alert">
              <b>Đảm bảo an toàn vệ sinh thực phẩm</b>
              <br />
              Các đơn vị cung cấp phải có giấy chứng nhận đủ điều kiện an toàn thực phẩm theo quy định của pháp luật.
            </div>
            <div className="alert alert-success" role="alert">
              <b>Hồ sơ pháp lý đầy đủ</b>
              <br />
              Tất cả nhà cung cấp đều có hồ sơ pháp lý rõ ràng và hợp đồng kinh tế với công ty.
            </div>
            <div className="alert alert-danger" role="alert">
              <b>Kiểm soát chất lượng thường xuyên</b>
              <br />
              Hạnh Phúc thường xuyên kiểm tra, đánh giá chất lượng nguyên liệu đầu vào nhằm đảm bảo{" "}
              <b>nguồn thực phẩm luôn đạt tiêu chuẩn an toàn và chất lượng.</b>
            </div>
            <hr />
            <h4 className="section-title">DANH SÁCH NHÀ CUNG CẤP NGUYÊN LIỆU</h4>
            <p>
              Dưới đây là danh mục các nhóm thực phẩm và đơn vị cung cấp đang hợp tác với <b>Công ty Hạnh Phúc.</b>
              Mỗi nhà cung cấp đều có hồ sơ pháp lý riêng kèm theo để khách hàng và đối tác có thể tham khảo chi tiết.
            </p>
            <div className="card">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button">
                        Gạo
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button">
                        Bún - bánh phở
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button">
                        Trứng các loại
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button">
                        Giò – Chả lợn
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button">
                        Đậu phụ
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab6-tab" data-bs-toggle="tab" data-bs-target="#tab6" type="button">
                        Cá rô phi
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab7-tab" data-bs-toggle="tab" data-bs-target="#tab7" type="button">
                        Thịt gà
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab8-tab" data-bs-toggle="tab" data-bs-target="#tab8" type="button">
                        Thịt lợn
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab9-tab" data-bs-toggle="tab" data-bs-target="#tab9" type="button">
                        Bánh Cosy Kinh Đô
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab10-tab" data-bs-toggle="tab" data-bs-target="#tab10" type="button">
                        Rau – Củ – Quả
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab11-tab" data-bs-toggle="tab" data-bs-target="#tab11" type="button">
                        Bánh tươi
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab12-tab" data-bs-toggle="tab" data-bs-target="#tab12" type="button">
                        Gia vị
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
                      <h4 className="card-title">Gạo</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY CP PHÂN PHỐI - BÁN LẺ VNF1
                        <br />
                        <b>Sản phẩm cung cấp:</b> Gạo phục vụ bếp ăn tập thể, gạo tiêu chuẩn an toàn thực phẩm. <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Giấy đăng ký kinh doanh</li>
                        <li>Chứng nhận Haccp</li>
                        <li>Chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Công bố sản phẩm</li>
                        <li>Hợp đồng kinh tế với Công ty Hạnh Phúc</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/gao">
                          Xem thêm
                        </Link>
                      </center>
                    </div>

                    <div className="tab-pane fade" id="tab2">
                      <h4 className="card-title">Bún - bánh phở</h4>
                      <p>
                        <b>Nhà cung cấp:</b> Công ty TNHH THƯƠNG MẠI VÀ SẢN XUẤT THANH KHOA
                        <br />
                        <b>Sản phẩm cung cấp:</b> Bún tươi, bánh phở phục vụ suất ăn công nghiệp.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Bản cam kết đảm bảo vệ sinh ATTP đối với nguyên liệu và sản phẩm thực phẩm</li>
                        <li>Giấy xác nhận tập huấn kiến thức về an toàn thực phẩm</li>
                        <li>Phiếu kết quả xét nghiệm nước sản xuất</li>
                        <li>Bản công bố kèm phiếu xét nghiệm sản phẩm </li>
                        <li>Hợp đồng mua vào của nhà cung cấp</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận Haccp codex</li>
                        <li>Phiếu kết quả thử nghiệm gạo khang dân</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/bunpho">
                          Xem thêm
                        </Link>
                      </center>
                    </div>

                    <div className="tab-pane fade" id="tab3">
                      <h4 className="card-title">Trứng các loại</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY TNHH THƯƠNG MẠI TỔNG HỢP QUYỀN MAI
                        <br />
                        <b>Sản phẩm cung cấp:</b> Trứng gà, trứng vịt đạt tiêu chuẩn an toàn thực phẩm. <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Quyền Mai.</li>
                        <li>Đăng ký kinh doanh.</li>
                        <li>Giấy chứ ng nhận cơ sở đủ điều kiện ATTP.</li>
                        <li>Phiếu xét nghiệm các sản phẩm.</li>
                        <li>Hợp đồng cung cấp thực phẩm phẩm công ty Quyền mai và Trương Văn Chiến.</li>
                        <li>Đơn xin xác nhận hộ chăn nuôi, trực tiếp sản xuất và là thành viên của HTX Thắng Lợi.</li>
                        <li>Hợp đồng cung cấp thực phẩm phẩm công ty Quyền mai và Nguyễn Văn Hân.</li>
                        <li>Bản cam kết đảm bảo vệ sinh an toàn thực phẩm.</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/trung">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab4">
                      <h4 className="card-title">Giò – Chả lợn</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY TNHH THƯƠNG MẠI TỔNG HỢP QUYỀN MAI
                        <br />
                        <b>Sản phẩm cung cấp:</b> Giò lụa, chả lợn phục vụ suất ăn tập thể.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Minh Hiếu</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP.</li>
                        <li>Giấy xác nhận tậ p huấn kiến thức về an toàn thực phẩm.</li>
                        <li>Phiếu kết quả xét nghiệm sản phẩm.</li>
                        <li>Hợp đồng nguyên tắc công ty Vinh Anh và Minh Hiếu.</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/giochalon">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab5">
                      <h4 className="card-title">Đậu phụ</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT THỰC PHẨM TÂM ĐỨC
                        <br />
                        <b>Sản phẩm cung cấp:</b> Đậu phụ tươi, đậu phụ chế biến.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Tâm Đức</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Giấy xác nhận tập huấn kiến thức về an toàn thực phẩm</li>
                        <li>Phiếu kết quả xét nghiệm nước sản xuất</li>
                        <li>Phiếu kết quả xét nghiệm sản phẩm</li>
                        <li>Hợp đồng mua bán hàng hóá công ty Hồng Hà và Tâm Đức</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận kiểm dịch thực vật và kiểm tra ATTP hàng hoá có nguồn gốc thực vật nhập khẩu</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/dauphu">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab6">
                      <h4 className="card-title">Thủy hải sản</h4>
                      <p>
                        <b>Nhà cung cấp:</b> HỢP TÁC XÃ THỦY SẢN CÔNG NGHỆ CAO ĐẠI ÁNG
                        <br />
                        <b>Sản phẩm cung cấp:</b> Thủy hải sản tươi sống phục vụ chế biến bữa ăn.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Hợp tác xã thuỷ sản công nghệ cao Đại Áng</li>
                        <li>Giấy chứng nhận đăng ký hợp tác xã</li>
                        <li>Giấy chứng nhận ISO</li>
                        <li>Giấy chứng nhận Vietgahp</li>
                        <li>Giấy xác nhận tập huấn kiến thức về an toàn thực phầm</li>
                        <li>Phiếu kết quả xét nghiệm nước sản xuất</li>
                        <li>Phiếu kết quả xét nghiệm các sản phẩm</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/thuyhaisan">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab7">
                      <h4 className="card-title">Thịt gà</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY TNHH THỰC PHẨM THƯƠNG MẠI THÀNH LỢI
                        <br />
                        <b>Sản phẩm cung cấp:</b> Thịt gà tươi phục vụ bếp ăn tập thể.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Thành Lợi</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận ISO</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Giấy xác nhận tập huấn kiến thức về an toàn thực phẩm</li>
                        <li>Phiếu kết quả xét nghiệm nước sinh hoạt và sản xuất</li>
                        <li>Phiếu kết quả xét nghiệm sản phẩm</li>
                        <li>Hợp đồng mua bán gà thịt thương phẩm công ty Japfa Việt Nam và Thành Lợi</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận Vietgahp của Japfa Việt Nam</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/thitga">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab8">
                      <h4 className="card-title">Thịt lợn</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY CỔ PHÀN CÔNG NGHỆ THỰC PHÂM VINH ANH
                        <br />
                        <b>Sản phẩm cung cấp:</b> Thịt lợn tươi đạt tiêu chuẩn kiểm dịch.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Vinh Anh</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận ISO</li>
                        <li>Giấy xác nhận tập huấn kiến thức về an toàn thực phẩm</li>
                        <li>Phiếu kết quả xét nghiệm sản phẩm</li>
                        <li>Hợp đồng nguyên tắc công ty New Hope Thanh Hoá và Vinh Anh</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận Vietgahp của New Hopе Thanh Hoá</li>
                        <li>Hợp đồng mua bán thịt heo công ty Vinh Anh và Hợp tác xã Hoàng Long</li>
                        <li>Giấy chứng nhận đăng ký hợp tác xã</li>
                        <li>Giấy chứng nhận Vietgahp của Hợp tác xã Hoàng Long</li>
                        <li>Hợp đồng nguyên tắc công ty Mạnh Quang và Vinh Anh</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Phiếu kết quả xét nghiệm sản phầm</li>
                      </ul>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY TNHH THỰC PHẨM NGUYÊN PHONG
                        <br />
                        <b>Sản phẩm cung cấp:</b> Thịt lợn tươi đạt tiêu chuẩn kiểm dịch.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Nguyên Phong</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Giấy xác nhận kiến thức ATTP</li>
                        <li>Bản công bố và xét nghiệm nước sản xuất</li>
                        <li>Hợp đồng mua bán Nguyên Phong và CP Việt Nam - chi nhánh NM 3 tại Hà Nội</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận ISO</li>
                        <li>Giấy chứng nhận Vietgahp</li>
                        <li>Bản xét nghiệm sản phẩm</li>
                        <li>Hợp đồng hợp tác kinh doanh 3 bên Nguyên Phong, Baf và Siba Food Việt Nam</li>
                        <li>Đăng ký kinh doanh của Baf</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP của Baf</li>
                        <li>Giấy chứng nhận Vietgahp của Baf</li>
                        <li>Giấy xác nhận tập huấn kiến thức ATTP</li>
                        <li>Bản xét nghiệm sản phẩm</li>
                        <li>Đăng ký kinh doanh của Siba</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP của Siba Food</li>
                        <li>Giấy chứng nhận Vietgahp của Siba Food</li>
                        <li>Bản xét nghiệm sản phẩm</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/thitlon">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab9">
                      <h4 className="card-title">Bánh cosy Kinh Đô</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ NGỌC HÀ
                        <br />
                        <b>Sản phẩm cung cấp:</b> Bánh Cosy, bánh ăn nhẹ phục vụ bữa phụ cho học sinh.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Ngọc Hà</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Đăng ký địa điểm kinh doanh</li>
                        <li>Giấy cam kết đảm bảo an toàn thực phẩm (Công ty không thuộc diện được cấp giấy chứng nhận cơ sở đủ điều kiện ATTP)</li>
                        <li>Giấy xác nhận tập huẩn kiến thức về ATTP</li>
                        <li>Công văn xác nhận công ty Ngọc Hà là nhà phân phối của Mondelez Kinh Đô</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận hệ thống ATTP FSSC</li>
                        <li>Bản công bố và xét nghiệm các sản phẩm</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/banhcosy">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab10">
                      <h4 className="card-title">Rau – Củ – Quả</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY CỔ PHẦN THỰC PHẨM VISAFO
                        <br />
                        <b>Sản phẩm cung cấp:</b> Rau xanh, củ, quả tươi theo mùa.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Visafo</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận Vietgahp</li>
                        <li>Giấy chứng nhận Ocop</li>
                        <li>Giấy chứng nhận Haccp codex</li>
                        <li>Giấy xác nhận tập huấn kiến thức về an toàn thực phẩm</li>
                        <li>Báo cáo kết quả phân tích của mẫu đất</li>
                        <li>Báo cáo kết quả phân tích của nước sạch</li>
                        <li>Bảng kê khai điều kiện sản xuất rau an toàn</li>
                        <li>Phiếu kết quả xét nghiệm các loại sản phẩm</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/raucuqua">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab11">
                      <h4 className="card-title">Bánh tươi</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ BẢO NGỌC.
                        <br />
                        <b>Sản phẩm cung cấp:</b> Bánh tươi phục vụ bữa phụ.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Bảo Ngọc</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Công văn thay đổi địa chỉ</li>
                        <li>Giấy chứng nhận ISO</li>
                        <li>Bản công bố các sản phẩm</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/banhtuoi">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                    <div className="tab-pane fade" id="tab12">
                      <h4 className="card-title">Gia vị</h4>
                      <p>
                        <b>Nhà cung cấp:</b> CÔNG TY CỔ PHẨN THƯƠNG MẠI VÀ DỊCH VỤ SƠN THỦY PHÁT.
                        <br />
                        <b>Sản phẩm cung cấp:</b> Gia vị chế biến thực phẩm.
                        <br />
                        <b>Hồ sơ pháp lý: </b>
                      </p>
                      <ul>
                        <li>Hợp đồng kinh tế công ty Hạnh Phúc và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Giấy chứng nhận đăng ký địa điểm kinh doanh</li>
                        <li>Giấy chứng nhận cơ sở đủ điều kiện ATTP</li>
                        <li>Bản công bố và xét nghiệm các sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Miwon Việt Nam và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm các sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Minh Quang và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm các sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Long Hải và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm các sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Duyên Hải và Sơn Thủy Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Hoàng Hải và Sơn Thủy Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Wilmar marketing CLV và Sơn Thủy Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm các sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Rồng Tây Nguyên và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Việt food và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm các sản phẩm</li>
                        <li>Hợp đồng đại lý công ty Đồng Tâm và Sơn Thuỷ Phát</li>
                        <li>Đăng ký kinh doanh</li>
                        <li>Bản tự công bố và xét nghiệm các sản phẩm</li>
                      </ul>
                      <center>
                        <Link className="btn btn-primary" href="suppliers/giavi">
                          Xem thêm
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
