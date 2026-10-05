# HPFood – Corporate & Food Supply Chain Portal

<p align="center">
  <img src="public/imgs/logo-h.png" alt="HPFood Logo" width="180"/>
</p>

<p align="center">
  <strong>Cổng thông tin doanh nghiệp & Nền tảng minh bạch chuỗi cung ứng thực phẩm học đường / công nghiệp</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Bootstrap-5.1.1-7952b3?logo=bootstrap" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Package_Manager-pnpm-f69220?logo=pnpm" alt="pnpm" />
</p>

---

## 📖 Giới thiệu (Overview)

**HPFood** là website chính thức và cổng thông tin giới thiệu của **Công ty TNHH Dịch Vụ & Thương Mại Hạnh Phúc** — đơn vị có gần 10 năm kinh nghiệm chuyên cung ứng suất ăn an toàn, dinh dưỡng cho hệ thống trường học (Tiểu học, THCS), các cơ sở giáo dục, doanh nghiệp và khu công nghiệp tại Hà Nội.

Dự án được xây dựng với mục tiêu số hóa hồ sơ năng lực, công khai minh bạch nguồn gốc nguyên liệu thực phẩm và tự động hóa quy trình tiếp nhận thông tin yêu cầu dịch vụ từ khách hàng và đối tác.

---

## ✨ Tính năng nổi bật (Key Features)

* **🏢 Hồ sơ năng lực & Trưng bày quy mô (Company Profile & Scale):**
  * Hiển thị câu chuyện thương hiệu, tầm nhìn, sứ mệnh, giá trị cốt lõi và sơ đồ tổ chức.
  * Bộ đếm số liệu thống kê động (Animated Counter) về số lượng cơ sở, đội ngũ nhân sự, trường học đối tác và số lượng suất ăn an toàn phục vụ hàng năm.
* **🔍 Minh bạch chuỗi cung ứng (Supply Chain Transparency):**
  * Phân loại chi tiết từng nhóm nguyên liệu đầu vào: Gạo, Bún/Phở, Trứng, Giò chả, Đậu phụ, Thủy hải sản, Thịt gia cầm, Thịt heo, Rau củ quả, Gia vị...
  * Tích hợp nhúng hồ sơ pháp lý, chứng nhận kiểm định chất lượng, hợp đồng nguyên tắc của từng nhà cung ứng đối tác trực tiếp trên giao diện.
* **📜 Chứng chỉ chất lượng & Pháp lý (Quality Compliance):**
  * Trưng bày chứng nhận hệ thống quản lý an toàn thực phẩm ISO 22000, tiêu chuẩn HACCP, chứng nhận cơ sở đủ điều kiện ATTP và giấy phép đăng ký kinh doanh dạng Accordion tương tác.
* **📩 Tiếp nhận liên hệ & Báo giá tự động (Automated Contact System):**
  * Form gửi yêu cầu tư vấn, báo giá suất ăn có đầy đủ validation.
  * Tích hợp **Brevo (Sendinblue) Transactional Email API** xử lý thông báo tự động tới ban quản trị theo thời gian thực.
  * Hiển thị trạng thái xử lý (loading, success, error) mượt mà với **SweetAlert2**.
* **⚡ Tối ưu hiệu năng & Trải nghiệm (Performance & UX):**
  * **Lazy-load Video YouTube:** Tối ưu tốc độ tải trang bằng cách nạp thumbnail trước, chỉ tải `iframe` khi người dùng nhấn xem phóng sự truyền hình.
  * **Interactive Media Gallery:** Tích hợp Lightbox hỗ trợ phóng to (Zoom) và duyệt ảnh cơ sở chế biến, khay ăn học sinh với thư viện `yet-another-react-lightbox`.
  * Tối ưu hóa ảnh với `next/image` và thiết kế Responsive hoàn chỉnh trên cả Mobile và Desktop.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ / Thư viện |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router) |
| **Thư viện UI** | [React](https://react.dev/) 19, [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4, [Bootstrap](https://getbootstrap.com/) 5.1.1, Bootstrap Icons |
| **Email Service** | [Brevo (Sendinblue)](https://www.brevo.com/) Transactional Emails API |
| **Database** | [Neon Serverless PostgreSQL](https://neon.tech/) |
| **UI Components** | SweetAlert2, Yet-Another-React-Lightbox |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Cấu trúc thư mục (Project Structure)

```bash
hpfood/
├── app/
│   ├── (introduction)/         # Giới thiệu: tầm nhìn, sứ mệnh, chứng chỉ, nhà cung cấp
│   │   ├── about/              # Về chúng tôi
│   │   ├── cert/               # Chứng nhận ATTP, ISO 22000, ĐKKD
│   │   ├── diagram/            # Sơ đồ tổ chức
│   │   ├── scale/              # Quy mô doanh nghiệp
│   │   ├── suppliers/          # Chi tiết hồ sơ từng nhà cung cấp thực phẩm
│   │   ├── value/              # Giá trị cốt lõi
│   │   └── vision/             # Tầm nhìn & sứ mệnh
│   ├── (landing page)/         # Giao diện Trang chủ và Layout chính
│   ├── (service)/              # Dịch vụ cung cấp suất ăn & thực phẩm
│   ├── contact/                # Trang liên hệ
│   │   ├── api/send-email/     # Route Handler xử lý gửi email qua Brevo API
│   │   └── contact-form.tsx    # Client Component form liên hệ
│   ├── customer/               # Danh sách khách hàng và trường học đối tác
│   ├── recruitment/            # Trang tuyển dụng
│   ├── ui/                     # Reusable components (Navbar, Footer, Gallery, Slider...)
│   └── favicon.ico
├── public/
│   ├── fonts/                  # Phông chữ tùy chỉnh
│   └── imgs/                   # Ảnh logo, đối tác trường học, chứng chỉ, banners
├── .env.example                # File mẫu cấu hình biến môi trường
├── package.json
└── tsconfig.json
```

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy (Getting Started)

### Yêu cầu môi trường:
* **Node.js** >= 18.18.0
* **pnpm** >= 8.x (khuyến nghị)

### 1. Clone repository về máy:
```bash
git clone https://github.com/chrislethedimsum/hpfood.git
cd hpfood
```

### 2. Cài đặt các gói phụ thuộc (Dependencies):
```bash
pnpm install
```

### 3. Cấu hình biến môi trường:
Sao chép file cấu hình mẫu `.env.example` thành `.env`:
```bash
cp .env.example .env
```
Điền các giá trị thích hợp vào file `.env`:
```env
# Database Neon Postgres
DATABASE_URL=postgresql://user:password@host/database?sslmode=require

# Brevo API Key dùng cho tính năng gửi email liên hệ
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Khởi chạy môi trường phát triển (Development):
```bash
pnpm dev
```
> **Lưu ý:** Dự án được cấu hình chạy ở cổng **4000**. Mở trình duyệt và truy cập: [http://localhost:4000](http://localhost:4000)

### 5. Build dự án cho Production:
```bash
pnpm build
pnpm start
```

---

## 📡 API Endpoints

### Gửi thông tin liên hệ (Send Contact Email)
* **Endpoint:** `POST /contact/api/send-email`
* **Content-Type:** `application/json`
* **Request Body:**
  ```json
  {
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@gmail.com",
    "phone": "0912345678",
    "address": "Hà Nội",
    "title": "Yêu cầu báo giá suất ăn học đường",
    "content": "Nội dung yêu cầu chi tiết..."
  }
  ```
* **Response:**
  * `200 OK`: `{ "message": "Email sent successfully!" }`
  * `500 Internal Server Error`: `{ "message": "Failed to send email", "error": "..." }`

---

## 📄 Bản quyền (License)

© 2026 **Công ty TNHH Dịch Vụ & Thương Mại Hạnh Phúc (HPFood Co., Ltd)**. Toàn bộ bản quyền thuộc sở hữu của doanh nghiệp.
