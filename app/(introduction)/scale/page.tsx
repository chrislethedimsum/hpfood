import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Quy mô Hạnh Phúc - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Scale() {
  return (
    <MainLayout>
      <section className="section news-view">
        <div className="container">
          <div className="section-body text-justify">
            <div className="row">
              <div className="col-md-4">
                <img src="imgs/map.png" alt="Quy mô Hạnh Phúc" />
              </div>
              <div className="col-md-8">
                <br />
                <h1 className="section-title">Quy mô Hạnh Phúc</h1>
                <p>
                  Kể từ khi được thành lập vào <b>năm 2018, Công ty TNHH Dịch vụ và Thương mại Hạnh Phúc</b> không ngừng phát triển về <b>quy mô tổ
                  chức, năng lực vận hành và chất lượng dịch vụ</b> trong lĩnh vực cung cấp suất ăn học đường, suất ăn tập thể và dịch vụ
                  catering. Với hệ thống cơ sở hoạt động ổn định, đội ngũ nhân sự gần 100 người cùng mạng lưới đối tác ngày càng mở rộng,
                  Hạnh Phúc từng bước khẳng định vị thế là đơn vị cung cấp suất ăn <b>uy tín, an toàn và chuyên nghiệp</b>.
                </p>
                <p>
                  <strong>
                    <span style={{fontSize:36}}>10 +</span>
                  </strong>
                  <br />
                  CƠ SỞ / NHÀ HÀNG – BẾP HOẠT ĐỘNG
                </p>

                <p>
                  <br />
                  <strong>
                    <span style={{fontSize:36}}>50+</span>
                  </strong>
                  <br />
                  KHÁCH HÀNG THÂN THIẾT
                </p>

                <p>
                  <br />
                  <span style={{fontSize:36}}>
                    <strong>4000+</strong>
                  </span>
                  <br />
                  SUẤT ĂN AN TOÀN HÀNG NĂM
                </p>
              </div>
            </div>

            <ul className="list-unstyled other-post ">
              <li>
                <a href="about">Lời nói đầu</a>
              </li>
              <li>
                <a href="vision">Tầm nhìn sứ mệnh</a>
              </li>
              <li>
                <a href="value">Giá trị cốt lõi</a>
              </li>
              <li>
                <a href="diagram">Sơ đồ tổ chức</a>
              </li>
              <li>
                <a href="cert">Chứng chỉ chất lượng, bảo hiểm</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
