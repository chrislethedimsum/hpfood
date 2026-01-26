import MainLayout from "@/app/(landing page)/layout";
import type { Metadata, Viewport } from "next";
import { useEffect } from "react";

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Về Chúng Tôi - Hạnh Phúc Food",
  description: "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function AboutUs() {
    useEffect(() => {
    const $ = (window as any).$;
    if (!$) return;

    /* ===== NAVBAR ===== */
    const navbarPos = () => {
      if ($(window).scrollTop() > 0) {
        $("#primary-navbar").addClass("fixed");
      } else {
        $("#primary-navbar").removeClass("fixed");
      }
    };

    if (window.innerWidth > 992) {
      $(".navbar .nav-item")
        .on("mouseover", function (this: HTMLElement) {
          const el_link = this.querySelector("a[data-bs-toggle]");
          if (el_link) {
            const nextEl = el_link.nextElementSibling as HTMLElement | null;
            el_link.classList.add("show");
            nextEl?.classList.add("show");
          }
        })
        .on("mouseleave", function (this: HTMLElement) {
          const el_link = this.querySelector("a[data-bs-toggle]");
          if (el_link) {
            const nextEl = el_link.nextElementSibling as HTMLElement | null;
            el_link.classList.remove("show");
            nextEl?.classList.remove("show");
          }
        });
    }

    /* ===== YOUTUBE LAZY LOAD ===== */
    const youtubeEls = document.querySelectorAll<HTMLElement>(".youtube");

    youtubeEls.forEach((el) => {
      const source = "https://img.youtube.com/vi/BfziQTiNPWQ/sddefault.jpg";

      const image = new Image();
      image.src = source;
      image.className = "lazy";
      image.alt =
        "Suất ăn công nghiệp Hạnh Phúc trên kênh VTC2 - phóng sự: Suất ăn an toàn";

      image.onload = () => {
        el.appendChild(image);
      };

      const clickHandler = () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.src =
          "https://www.youtube.com/embed/BfziQTiNPWQ?rel=0&showinfo=0&autoplay=1";

        el.innerHTML = "";
        el.appendChild(iframe);
      };

      el.addEventListener("click", clickHandler);

      // lưu để cleanup
      (el as any)._ytClick = clickHandler;
    });

    /* ===== CLEANUP ===== */
    return () => {
      $(".navbar .nav-item").off("mouseover mouseleave");
      $(window).off("scroll", navbarPos);

      youtubeEls.forEach((el) => {
        const handler = (el as any)._ytClick;
        if (handler) {
          el.removeEventListener("click", handler);
        }
      });
    };
  }, []);
    return (
        <MainLayout>
            <section className="section news-view">
                <div className="container">
                    <div className="section-body text-justify">
                        <h1 className="section-title">Lời nói đầu</h1>
                        <p><strong>CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ SAO VIỆT NAM (STAVI CO., LTD)</strong> là một trong những công ty hàng đầu về lĩnh vực thực phẩm, suất ăn công nghiệp tại Việt Nam.<br>
                            Với phương thức cung cấp trọn gói bao gồm dịch vụ cung cấp suất ăn công nghiệp, dịch vụ cung cấp thực phẩm cho khách hàng và đồng thời cung cấp trang thiết bị bếp ăn. Chúng tôi tập trung vào nguồn lực từ đội ngũ nhân sự chất lượng, được đào tạo bài bản và có nhiều năm kinh nghiệm trong lĩnh vực, đến hệ thống trang thiết bị hiện đại, để tự tin mang đến cho khách hàng dịch vụ chuyên nghiệp nhất, chất lượng nhất với mức chi phí tối ưu nhất.</p>
                        <p>STAVI vinh dự được trở thành đối tác thân thiết và lâu năm của các đơn vị có quy mô lớn trong nước, đồng thời nhận được sự ghi nhận và đánh giá cao từ phía đối tác cả về Chất Lượng và Dịch Vụ, có thể kể đến như: Công ty TNHH Điện tử Canon Việt Nam, Công ty TNHH Điện tử Taisei Việt Nam, Công ty TNHH Thiết bị Công nghiệp Toyota Việt Nam, Công Ty TNHH Công Nghệ Nissei Việt Nam, Công Ty TNHH Scancom Việt Nam – Chi Nhánh Mêkong, Nhà Máy Sữa đậu nành Vinasoy Bình Dương,...</p>
                        <p>Tập trung vào chất lượng và luôn có quy trình kiểm soát khắt khe để mang đến dịch vụ hoàn hảo nhất cho Quý khách hàng, Stavi đã được cơ quan quản lý có thẩm quyền cấp Giấy chứng nhận về vệ sinh an toàn thực phẩm, đạt tiêu chuẩn <strong>ISO 22000:2018</strong> - Tiêu chuẩn quốc tế về hệ thống quản lý an toàn thực phẩm và mua bảo hiểm cho mỗi suất ăn Stavi cung cấp. Hiện tại Stavi có thể đáp ứng mọi nhu cầu về các dịch vụ cung cấp suất ăn công nghiệp cho Quý đối tác.</p>
                        <ul className="list-unstyled other-post">
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Tam-nhin-su-menh.html">Tầm nhìn sứ mệnh</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Gia-tri-cot-loi.html">Giá trị cốt lõi</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/So-do-to-chuc.html">Sơ đồ tổ chức</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Quy-mo-STAVI.html">Quy mô STAVI</a></li>
                            <li><a href="https://stavi.com.vn/vi/gioi-thieu/Chung-chi-chat-luong-bao-hiem.html">Chứng chỉ chất lượng, bảo hiểm</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            abc
        </MainLayout>
    );
}