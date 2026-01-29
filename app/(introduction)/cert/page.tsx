import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Chứng chỉ - Hạnh Phúc",
  description: "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Cert() {
    return (
        <MainLayout>
            <section className="section news-view">
                <div className="container">
                    <div className="section-body text-justify">
                        <h1 className="section-title">Chứng chỉ chất lượng, bảo hiểm</h1>
                        <center>
                            <h4>Chứng nhận cơ sở đủ điều kiện an toàn thực phẩm</h4><br />
                            <img src="imgs/cert/attp.jpeg" width="50%"/><br />
                            <h4>Chứng nhận đăng kí kinh doanh nghiệp</h4><br />
                            <img src="imgs/cert/dkkd1.jpg"/><br />
                            <img src="imgs/cert/dkkd2.jpg"/><br />
                            <img src="imgs/cert/dkkd3.jpg"/><br />
                            <h4>Chứng nhận hệ thống quản lý an toàn thực phẩm phù hợp tiểu chuẩn ISO 22000</h4><br />
                            <img src="imgs/cert/iso22000 1.jpg"/><br />
                            <img src="imgs/cert/iso22000 2.jpg"/><br />
                        </center>
                        <ul className="list-unstyled other-post">
                            <li><a href="vision">Tầm nhìn sứ mệnh</a></li>
                            <li><a href="value">Giá trị cốt lõi</a></li>
                            <li><a href="diagram">Sơ đồ tổ chức</a></li>
                            <li><a href="scale">Quy mô Hạnh Phúc</a></li>
                            <li><a href="cert">Chứng chỉ chất lượng, bảo hiểm</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}