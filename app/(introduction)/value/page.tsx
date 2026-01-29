import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Giá trị cốt lõi - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Value() {
  return (
    <MainLayout>
      <section class="section news-view">
        <div class="container">
          <div class="section-body text-justify">
            <h1 class="section-title">Giá trị cốt lõi</h1>
            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/tu-te.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">
                Hạnh Phúc đề cao sự tử tế trong tư duy, lời nói và hành động, lấy đạo đức nghề nghiệp làm nền tảng cho mọi hoạt động sản xuất, kinh doanh và phục vụ cộng đồng.
              </div>
            </div>

            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/khach-hang.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">
                Chúng tôi luôn đặt khách hàng và đối tác làm trung tâm, lấy sự an tâm và hài lòng của khách hàng làm thước đo cho chất lượng dịch vụ và hiệu quả hoạt động.
              </div>
            </div>

            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/cau-tien.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">Hạnh Phúc không ngừng học hỏi, cải tiến quy trình và đổi mới phương pháp làm việc nhằm nâng cao chất lượng bữa ăn, dịch vụ và năng lực vận hành.</div>
            </div>

            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/giu-loi-hua.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">
                Giữ đúng cam kết với khách hàng, đối tác, người lao động và nhà cung cấp là nguyên tắc xuyên suốt, thể hiện uy tín và sự đáng tin cậy của Công ty.
              </div>
            </div>

            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/trach-nhiem.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">
                Chúng tôi luôn chủ động nhận trách nhiệm trong công việc, không né tránh khó khăn, tập trung tìm giải pháp để hoàn thành tốt nhiệm vụ được giao.
              </div>
            </div>

            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/yeu-thuong.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">Hạnh Phúc xây dựng môi trường làm việc gắn kết, tôn trọng và sẻ chia, coi tập thể như một gia đình và phối hợp cùng nhau vì mục tiêu chung.</div>
            </div>

            <div class="_ct_item">
              <div class="_img">
                <img alt="" src="imgs/icons/trung-thuc.png" style={{ height: 150, width: 150 }} />
              </div>

              <div class="_txt">
                Trung thực, minh bạch và ngay thẳng trong mọi hoạt động là giá trị cốt lõi mà toàn thể cán bộ, nhân viên Hạnh Phúc luôn tuân thủ và gìn giữ.
              </div>
            </div>

            <ul class="list-unstyled other-post ">
              <li>
                <a href="about">Lời nói đầu</a>
              </li>
              <li>
                <a href="vision">Tầm nhìn sứ mệnh</a>
              </li>
              <li>
                <a href="diagram">Sơ đồ tổ chức</a>
              </li>
              <li>
                <a href="scale">Quy mô STAVI</a>
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
