import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Sơ đồ tổ chức - Hạnh Phúc",
  description: "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Diagram() {
    return (
        <MainLayout>
            <section className="section news-view">
                <div className="container">
                    <div className="section-body text-justify">
                        <h1 className="section-title">Sơ đồ tổ chức</h1>
                        <center>
                            <img src="imgs/sodo.png" />
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