import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Hồ sơ đối tác cung cấp - Thịt lợn",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Cert() {
  return (
    <MainLayout>
      <section className="section news-view">
        <div className="container">
          <div className="section-body text-justify">
            <h1 className="section-title">Hồ sơ đối tác cung cấp - Thịt lợn</h1>
            <div className="card">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button">
                        Nguyên Phong
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button">
                        Vinh Anh
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
                      <iframe
                      className="rounded"
                        src="https://drive.google.com/file/d/1Im2CJdi2sy3sDF69CDg1nGmFnFzRDaPP/preview"
                        width="100%"
                        height="1000"
                      ></iframe>
                    </div>

                    <div className="tab-pane fade" id="tab2">
                      <iframe
                      className="rounded"
                        src="https://drive.google.com/file/d/15AHZIUZag7Qbdt4PMLdLo6z_ufrN4CxU/preview"
                        width="100%"
                        height="1000"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-unstyled other-post">
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
                <a href="scale">Quy mô Hạnh Phúc</a>
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
