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
      <section className="section recruitment">
        <div className="container">
          
          <header className="section-header">
            <h1>Tuyển dụng Nhân viên Bếp</h1>
            <p>Công ty TNHH Dịch vụ &amp; Thương mại Hạnh Phúc</p>
          </header>

          <article className="section-content">
            <p>
              Nhằm mở rộng hoạt động cung cấp suất ăn cho các trường học,
              <strong>Công ty Hạnh Phúc</strong> hiện đang tuyển dụng
              <strong>Nhân viên Bếp</strong> làm việc tại khu vực Thanh Xuân (Hà Nội).
            </p>

            <h4>I. Thông tin chung</h4>
            <ul>
              <li>
                <strong>Vị trí:</strong> Nhân viên Bếp
              </li>
              <li>
                <strong>Địa điểm làm việc:</strong> Hà Nội
              </li>
              <li>
                <strong>Hình thức làm việc:</strong> Part-time / Full-time
              </li>
              <li>
                <strong>Thời gian làm việc:</strong>
                <ul>
                  <li>Ca part-time: 06:00 – 12:00</li>
                  <li>Ca full-time: 06:00 – 14:00 hoặc 06:00 – 15:00 (có phát sinh thêm công việc)</li>
                </ul>
              </li>
            </ul>
            <h4>II. Mô tả công việc</h4>
            <ul>
              <li>Đếm thìa, khay, dụng cụ ăn uống</li>
              <li>Di chuyển đồ ăn đã được đóng sẵn trong khuôn viên bếp/trường học</li>
              <li>Hỗ trợ sắp xếp, chuẩn bị phục vụ bữa ăn</li>
              <li>Thực hiện các công việc theo sự phân công của bếp trưởng</li>
            </ul>

            <p>
              <em>Công việc nhẹ nhàng, môi trường sạch sẽ, ổn định.</em>
            </p>

            <h4>III. Thu nhập</h4>
            <ul>
              <li>
                Part-time: <strong>30.000đ / giờ</strong>
              </li>
              <li>
                Gắn bó lâu dài có thể thỏa thuận lương
                <strong> 6.500.000 – 8.000.000 VNĐ / tháng </strong>
                (22 công)
              </li>
            </ul>

            <h4>IV. Quyền lợi &amp; chế độ</h4>
            <ul>
              <li>
                Được bao ăn <strong>01 bữa/ngày</strong> tại cơ sở
              </li>
              <li>
                Thưởng chuyên cần:
                <strong> 200.000 – 500.000 VNĐ </strong>
                (theo thâm niên làm việc)
              </li>
              <li>Môi trường làm việc ổn định, thân thiện</li>
              <li>Có cơ hội gắn bó lâu dài</li>
            </ul>

            <h4>V. Yêu cầu</h4>
            <ul>
              <li>Không yêu cầu kinh nghiệm</li>
              <li>Chăm chỉ, trung thực, có trách nhiệm trong công việc</li>
              <li>Sức khỏe tốt, có thể làm việc theo ca sáng</li>
            </ul>

            <p>
              <em>Ứng viên sẽ được đào tạo công việc từ đầu.</em>
            </p>

            <h4>VI. Thông tin ứng tuyển</h4>
            <p>Ứng viên quan tâm vui lòng liên hệ trực tiếp để trao đổi chi tiết:</p>
            <ul>
              <li>
                <strong>Điện thoại / Zalo:</strong> 0912 126 648
              </li>
              <li>
                <strong>Email:</strong> info@hpfood.info
              </li>
            </ul>

            <p>
              Công ty Hạnh Phúc luôn chào đón những ứng viên
              <strong> chăm chỉ – trách nhiệm – mong muốn gắn bó lâu dài </strong>
              cùng chúng tôi.
            </p>
          </article>
        </div>
      </section>
    </MainLayout>
  );
}
