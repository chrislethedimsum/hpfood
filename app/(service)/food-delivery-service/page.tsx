import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";
import ImageGallery from "@/app/ui/ImageGallery";
import food1 from "@/public/imgs/food/food1.webp"
import food2 from "@/public/imgs/food/food2.jpg"

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Cung cấp thực phẩm - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function FoodDeliveryService() {
  return (
    <MainLayout>
      <section className="section service-food">
        <div className="container">
          <header className="section-header">
            <h1>Dịch vụ cung cấp thực phẩm</h1>
            <p>Giải pháp cung ứng thực phẩm an toàn – minh bạch – ổn định cho bếp ăn tập thể</p>
          </header>

          <article className="section-content">
            <p>
              <strong>Công ty TNHH Dịch vụ Thương mại Hạnh Phúc</strong> cung cấp dịch vụ cung ứng thực phẩm cho các bếp ăn trường
              học, bếp ăn tập thể, doanh nghiệp và đơn vị tổ chức dịch vụ ăn uống.
            </p>

            <p>
              Trong bối cảnh vấn đề an toàn thực phẩm ngày càng được quan tâm, chúng tôi tập trung xây dựng chuỗi cung ứng thực phẩm có
              <strong>  nguồn gốc rõ ràng, kiểm soát chặt chẽ và tuân thủ nghiêm ngặt các quy định về vệ sinh an toàn thực phẩm</strong>.
            </p>

            <h4>Vì sao nên lựa chọn Hạnh Phúc?</h4>
            <ul>
              <li>Gần 10 năm kinh nghiệm trong lĩnh vực cung cấp thực phẩm và suất ăn tập thể</li>
              <li>Đối tác lâu năm của nhiều trường học và đơn vị tổ chức bếp ăn</li>
              <li>Quy trình kiểm soát chất lượng chặt chẽ từ nguồn cung đến giao nhận</li>
              <li>Khả năng cung ứng ổn định với số lượng lớn</li>
            </ul>
            <center>
                <ImageGallery images={[food1]} description="Thực phẩm" cols={1} width={500} height={300}/>
            </center>
            <h4 className="mt-4">Các nhóm thực phẩm cung cấp</h4>
            <ul>
              <li>
                <strong>Thực phẩm tươi sống:</strong> thịt, cá, rau củ quả theo ngày
              </li>
              <li>
                <strong>Thực phẩm đông lạnh:</strong> bảo quản theo đúng tiêu chuẩn
              </li>
              <li>
                <strong>Thực phẩm khô – gia vị:</strong> phục vụ chế biến bếp ăn tập thể
              </li>
              <li>
                <strong>Thực phẩm theo nhu cầu dinh dưỡng:</strong> linh hoạt theo đối tượng sử dụng
              </li>
            </ul>

            <h4>Quy trình cung cấp thực phẩm</h4>
            <ol>
              <li>Lựa chọn nhà cung cấp uy tín, có hồ sơ pháp lý đầy đủ</li>
              <li>Kiểm tra chất lượng và nguồn gốc nguyên liệu đầu vào</li>
              <li>Bảo quản theo đúng điều kiện kho khô, kho mát, kho lạnh</li>
              <li>Sơ chế (theo yêu cầu) và đóng gói</li>
              <li>Vận chuyển đến bếp ăn đúng thời gian, đúng số lượng</li>
            </ol>
            <center>
                <ImageGallery images={[food2]} description="Thực phẩm" cols={1} width={500} height={300}/>
            </center>
            <h4 className="mt-4">Lợi ích khi sử dụng dịch vụ của Hạnh Phúc</h4>
            <ul>
              <li>Nguồn thực phẩm ổn định, đa dạng, đáp ứng số lượng lớn</li>
              <li>Hỗ trợ sơ chế theo yêu cầu của bếp ăn</li>
              <li>Linh hoạt xử lý đơn hàng phát sinh</li>
              <li>Giá thành hợp lý, giao hàng tận nơi</li>
            </ul>

            <h4>Cam kết của chúng tôi</h4>
            <ul>
              <li>Thực phẩm an toàn, có nguồn gốc rõ ràng</li>
              <li>Tuân thủ đầy đủ quy định về vệ sinh an toàn thực phẩm</li>
              <li>Đảm bảo chất lượng, số lượng và tiến độ giao hàng</li>
              <li>Sẵn sàng đổi trả khi sản phẩm không đáp ứng yêu cầu</li>
            </ul>

            <p>
              Với năng lực tổ chức bài bản và tinh thần trách nhiệm cao,
              <strong> Công ty Hạnh Phúc</strong> cam kết trở thành đối tác cung cấp thực phẩm{" "}
              <strong>uy tín – lâu dài – đáng tin cậy </strong>
              cho các đơn vị trường học và bếp ăn tập thể.
            </p>
          </article>
        </div>
      </section>
    </MainLayout>
  );
}
