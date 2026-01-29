import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";
import ImageGallery from "@/app/ui/ImageGallery";
import menu1 from "@/public/imgs/menu/menu1.jpg"
import menu2 from "@/public/imgs/menu/menu2.jpg"
import menu3 from "@/public/imgs/menu/menu3.jpg"
import menu4 from "@/public/imgs/menu/menu4.jpg"
import meal1 from "@/public/imgs/meal/meal1.jpg"
import meal2 from "@/public/imgs/meal/meal2.jpg"
import meal3 from "@/public/imgs/meal/meal3.jpg"
import meal4 from "@/public/imgs/meal/meal4.jpg"
import kitchen1 from "@/public/imgs/kitchen/kitchen1.jpg"

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Cung cấp suất ăn công nghiệp - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function IndustrialCateringService() {
  return (
    <MainLayout>
      <section className="section news-view">
        <div className="container">
          <div className="section-body text-justify">
            <section className="service-section">
              <header className="service-header">
                <h1>Cung cấp suất ăn công nghiệp</h1>
                <p className="service-subtitle">Giải pháp bữa ăn an toàn – dinh dưỡng – bền vững</p>
              </header>

              <div className="service-content">
                <p>
                  Trong bối cảnh các khu công nghiệp, trường học và doanh nghiệp ngày càng phát triển, nhu cầu về{" "}
                  <strong>suất ăn công nghiệp an toàn, đủ dinh dưỡng và ổn định lâu dài</strong> trở thành yếu tố quan trọng đối với sức
                  khỏe và hiệu quả học tập, làm việc.
                </p>

                <p>
                  Với <strong>gần 10 năm kinh nghiệm</strong> trong lĩnh vực cung cấp suất ăn tập thể,{" "}
                  <strong>Công ty TNHH Dịch vụ &amp; Thương mại Hạnh Phúc</strong>
                  là đơn vị uy tín chuyên cung cấp <strong>suất ăn công nghiệp, suất ăn học đường và bếp ăn bán trú</strong>, đáp ứng đầy đủ
                  các quy định về
                  <strong> vệ sinh an toàn thực phẩm</strong>.
                </p>

                <h4>Suất ăn công nghiệp là gì?</h4>
                <p>Suất ăn công nghiệp là hình thức tổ chức, chế biến và cung cấp bữa ăn với số lượng lớn cho các đối tượng như:</p>

                <ul>
                  <li>Công nhân tại nhà máy, xí nghiệp</li>
                  <li>Học sinh bán trú tại trường học</li>
                  <li>Nhân viên tại cơ quan, doanh nghiệp</li>
                </ul>

                <p>
                  Các suất ăn được xây dựng dựa trên định lượng dinh dưỡng khoa học, đảm bảo cân đối 4 nhóm chất:
                  <strong> Đạm – Chất béo – Tinh bột – Vitamin &amp; khoáng chất</strong>, phù hợp với từng độ tuổi và cường độ lao động.
                </p>
                
                <ImageGallery
                  images={[menu1, menu2, menu3, menu4].map(i => i.src)}
                  cols={2}
                  width={700}
                  height={500}
                  description="Thực đơn suất ăn công nghiệp của Hạnh Phúc"
                />
                <center><i>Thực đơn suất ăn công nghiệp của Hạnh Phúc</i></center>
                <h4 className="mt-4">Thế mạnh dịch vụ suất ăn công nghiệp của Hạnh Phúc</h4>
                <ul>
                  <li>
                    <strong>Nguyên liệu an toàn:</strong> Lựa chọn từ các nhà cung cấp uy tín, có nguồn gốc rõ ràng, kiểm soát chặt chẽ đầu
                    vào.
                  </li>
                  <li>
                    <strong>Quy trình khép kín:</strong> Tuân thủ nghiêm ngặt các bước từ nhập hàng, sơ chế, chế biến đến lưu mẫu và phục
                    vụ.
                  </li>
                  <li>
                    <strong>Thực đơn linh hoạt:</strong> Xây dựng theo tuần, thay đổi thường xuyên, phù hợp theo mùa và nhu cầu dinh dưỡng.
                  </li>
                  <li>
                    <strong>Nhân sự chuyên nghiệp:</strong> Đội ngũ đầu bếp và quản lý bếp được đào tạo bài bản, có kinh nghiệm thực tế.
                  </li>
                  <li>
                    <strong>Giám sát chất lượng:</strong> Kiểm tra định kỳ và đột xuất tại các bếp ăn nhằm đảm bảo chất lượng đồng đều.
                  </li>
                </ul>
                <ImageGallery
                  images={[meal1, meal2, meal3, meal4].map(i => i.src)}
                  cols={2}
                  width={700}
                  height={500}
                  description="Suất ăn công nghiệp của Hạnh Phúc"
                />
                <center><i>Suất ăn thực tế cho học sinh của Hạnh Phúc</i></center>
                <h4 className="mt-4">Quy trình cung cấp suất ăn công nghiệp</h4>
                <ol>
                  <li>Lên thực đơn và kế hoạch dinh dưỡng</li>
                  <li>Thu mua và kiểm tra nguyên liệu đầu vào</li>
                  <li>Sơ chế và bảo quản theo đúng tiêu chuẩn</li>
                  <li>Chế biến trong khu bếp đạt điều kiện VSATTP</li>
                  <li>Chia suất và tổ chức phục vụ</li>
                  <li>Lưu mẫu thức ăn theo quy định</li>
                  <li>Kiểm tra, giám sát và đánh giá chất lượng</li>
                </ol>
                <center>
                  <ImageGallery images={[kitchen1].map(i => i.src)} cols={1} description="Bếp ăn công nghiệp của Hạnh Phúc" width={700} height={400} />
                  <i>Các suất ăn của Hạnh Phúc được chuẩn bị, đóng gói và sẵn sàng phục vụ</i>
                </center>
                <h4 className="mt-4">Đối tượng phục vụ</h4>
                <ul>
                  <li>Trường học mầm non, tiểu học, THCS bán trú</li>
                  <li>Doanh nghiệp, nhà máy, xí nghiệp</li>
                  <li>Cơ quan, tổ chức có nhu cầu bếp ăn tập thể</li>
                </ul>

                <h4>Cam kết của Hạnh Phúc</h4>
                <ul>
                  <li>An toàn thực phẩm là ưu tiên hàng đầu</li>
                  <li>Bữa ăn đầy đủ dinh dưỡng, phù hợp khẩu vị</li>
                  <li>Giữ đúng cam kết về chất lượng và số lượng</li>
                  <li>Đồng hành lâu dài cùng nhà trường và doanh nghiệp</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
