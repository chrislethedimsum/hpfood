import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Tầm nhìn sứ mệnh - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Vision() {
  return (
    <MainLayout>
      <section className="section news-view">
        <div className="container">
          <div className="section-body text-justify">
            <h1 className="section-title">Tầm nhìn sứ mệnh</h1>
            <div className="_ct_item">
              <div className="_img">
                <img alt="" src="imgs/icons/su-menh.jpg" style={{height:155, width:147}} />
              </div>

              <div className="_txt">
                <p>Trở thành <b>đơn vị cung cấp suất ăn học đường và suất ăn tập thể uy tín hàng đầu</b>, được các <b>trường học, tổ chức và đối tác</b> tin tưởng lựa chọn nhờ <b>chất lượng bữa ăn, tính an toàn và sự chuyên nghiệp trong vận hành</b>.</p>
                <p>Hạnh Phúc hướng tới xây dựng một thương hiệu <b>phát triển bền vững</b>, vững mạnh về tổ chức, chuẩn mực về quy trình và không ngừng nâng cao giá trị đóng góp cho <b>sức khỏe cộng đồng</b>.</p>
              </div>
            </div>

            <div className="_ct_item">
              <div className="_img">
                <img alt="" src="imgs/icons/tam-nhin.jpg" style={{height:179, width:147}} />
              </div>

              <div className="_txt">
                <p><b>Đối với khách hàng:</b><br />
                Cung cấp những <b>bữa ăn ngon, an toàn, đầy đủ dinh dưỡng</b>, đáp ứng đúng nhu cầu và đặc thù của từng đối tượng, đặc biệt là học sinh bán trú, góp phần nâng cao chất lượng học tập và sinh hoạt.
                </p>
                <p><b>Đối với đối tác:</b><br />
                Trở thành <b>đối tác tin cậy, lâu dài</b>, vận hành minh bạch, tuân thủ đầy đủ các quy định về vệ sinh an toàn thực phẩm và trách nhiệm xã hội.
                </p>
                <p><b>Đối với người lao động:</b><br />
                Xây dựng môi trường làm việc <b>ổn định, chuyên nghiệp</b>, tạo điều kiện phát triển năng lực, đảm bảo thu nhập và đời sống cho cán bộ, nhân viên.
                </p>
                <p><b>Đối với cộng đồng và xã hội:</b><br />
                Góp phần nâng cao <b>chất lượng bữa ăn tập thể</b>, bảo vệ sức khỏe cộng đồng và hướng tới <b>phát triển bền vững gắn liền với trách nhiệm môi trường</b>.
                </p>
              </div>
            </div>

            <ul className="list-unstyled other-post ">
              <li>
                <a href="about">Lời nói đầu</a>
              </li>
              <li>
                <a href="value">Giá trị cốt lõi</a>
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
