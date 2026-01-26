import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Về Chúng Tôi - Hạnh Phúc Food",
  description: "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function AboutUs() {
    return (
        <MainLayout>
            <section className="section news-view">
                <div className="container">
                    <div className="section-body text-justify">
                        <h1 className="section-title">Lời nói đầu</h1>
                        <p><b>CÔNG TY TNHH DỊCH VỤ VÀ THƯƠNG MẠI HẠNH PHÚC</b> là đơn vị hoạt động chuyên sâu trong lĩnh vực <b>cung cấp suất ăn tập thể, suất ăn học đường và dịch vụ nhà hàng – catering</b> tại Việt Nam. Với gần <b>10 năm kinh nghiệm</b>, Hạnh Phúc đã và đang khẳng định uy tín thông qua chất lượng bữa ăn, sự an toàn trong quy trình chế biến và tinh thần phục vụ tận tâm.</p>
                        <p>Chúng tôi cung cấp <b>giải pháp suất ăn trọn gói</b> cho các trường học và tổ chức, bao gồm: xây dựng thực đơn dinh dưỡng phù hợp từng đối tượng, tổ chức bếp ăn, chế biến – phân phối suất ăn và dịch vụ tiệc theo yêu cầu như <b>tiệc cưới, tiệc hội thảo, sự kiện, team building</b>. Hạnh Phúc luôn chú trọng đầu tư vào đội ngũ nhân sự hơn <b>100 người</b>, hệ thống <b>10+ cơ sở hoạt động ổn định</b>, cùng trang thiết bị bếp ăn đáp ứng các yêu cầu về <b>vệ sinh an toàn thực phẩm</b>.</p>
                        <p>Hiện nay, Hạnh Phúc là đối tác cung cấp suất ăn cho nhiều <b>trường học cấp 1, cấp 2</b> trên địa bàn như <b>Khương Đình, Thanh Xuân Nam, Phan Đình Giót, Phương Liệt, Lý Nam Đế, Kim Giang</b>, đồng thời phục vụ hàng chục khách hàng thân thiết trong lĩnh vực nhà hàng và catering. Mỗi năm, chúng tôi cung cấp hơn <b>4.000 suất ăn</b>, luôn nhận được sự tin tưởng và đánh giá tích cực từ phía nhà trường, phụ huynh và đối tác.</p>
                        <p>Lấy <b>chất lượng – an toàn – trách nhiệm</b> làm kim chỉ nam, Hạnh Phúc xây dựng quy trình kiểm soát chặt chẽ từ khâu lựa chọn nguyên liệu, chế biến đến phục vụ, nhằm mang đến những bữa ăn <b>đầy đủ dinh dưỡng, an toàn và phù hợp với từng độ tuổi</b>. Chúng tôi cam kết không ngừng hoàn thiện dịch vụ để trở thành <b>đối tác tin cậy và lâu dài</b> của Quý khách hàng.</p>
                        <ul className="list-unstyled other-post">
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Tam-nhin-su-menh.html">Tầm nhìn sứ mệnh</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Gia-tri-cot-loi.html">Giá trị cốt lõi</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/So-do-to-chuc.html">Sơ đồ tổ chức</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Quy-mo-STAVI.html">Quy mô Hạnh Phúc</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Chung-chi-chat-luong-bao-hiem.html">Chứng chỉ chất lượng, bảo hiểm</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}