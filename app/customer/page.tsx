import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Sơ đồ tổ chức - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Diagram() {
  return (
    <MainLayout>
      <section className="section section-customer" id="section4">
        <div className="container">
          <h2 className="section-title">Khách hàng</h2>
          <div className="section-body">
            <ul className="list-unstyled list d-flex flex-row">
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/khuongdinhc1.png" alt="" />
                </a>
              </li>
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/khuongdinhc2.png" alt="" />
                </a>
              </li>
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/kimgiangc2.png" alt="" />
                </a>
              </li>
            </ul>
            <ul className="list-unstyled list d-flex flex-row">
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/lynamdec2.png" alt="" />
                </a>
              </li>
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/phandinhgiotc2.png" alt="" />
                </a>
              </li>
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/phuonglietc2.png" alt="" />
                </a>
              </li>
            </ul>
            <ul className="list-unstyled list d-flex flex-row">
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/hvtc2.png" className="rounded-circle" alt="" />
                </a>
              </li>
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/thanhxuannamc1-2.png" alt="" />
                </a>
              </li>
              <li className="_item">
                <a href="#">
                  <img src="imgs/school/thanhxuannamc2.png" alt="" />
                </a>
              </li>
            </ul>
            <div className="text-center"></div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
