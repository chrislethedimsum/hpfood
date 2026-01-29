import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";
import ContactForm from "@/app/contact/contact-form";
export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Chứng chỉ - Hạnh Phúc",
  description:
    "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function Cert() {
  return (
    <MainLayout>
      <section className="section news-view">
        <div className="container">
          <h1 className="section-title">Liên hệ</h1>
          <div className="section-body">
            <div className="row pt-3">
              <div className="col-md-5 pb-5">
                <div className="text-start">
                  <div className="mb-5">
                    <h3>
                      <strong>CÔNG TY TNHH DỊCH VỤ & THƯƠNG MẠI HẠNH PHÚC</strong>
                    </h3>
                    <div>
                      <span>Địa chỉ:</span> Số nhà 14, Ngách 1/10/2 Phố Thuý Lĩnh, Phường Lĩnh Nam, Thành phố Hà Nội, Việt Nam.
                    </div>
                    Điện thoại:{" "}
                    <a href="tel:0912126648" rel="nofollow">
                      091 212 6648
                    </a>
                    <br />
                    Email:{" "}
                    <a href="tel:info@hpfood.info" rel="nofollow">
                      info@hpfood.info
                    </a>
                    <br />
                    Website: <a href="https://hpfood.info">https://hpfood.info</a>
                  </div>
                  <ContactForm />
                </div>
              </div>
              <div className="col-md-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.327835110246!2d105.89381429999999!3d20.979491799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af513ef4cc47%3A0x216500b71e93ff51!2zQ8O0bmcgdHkgVE5ISCBE4buLY2ggduG7pSB2w6AgVGjGsMahbmcgbeG6oWkgSOG6oW5oIFBow7pj!5e0!3m2!1sen!2s!4v1769713147555!5m2!1sen!2s"
                  width="100%"
                  height={750}
                  style={{border:0}}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
