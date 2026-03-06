import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/ui/social_btns.css';
import '@/app/ui/bootstrap-5.1.1/css/bootstrap.min.css';
import '@/app/ui/bootstrap-icons.css';
import '@/app/ui/globals.css';
import Script from "next/script";
import NavBar from "@/app/ui/navbar";
import ImageSlider from "@/app/ui/imageslider";
import Footer from "@/app/ui/footer";
import "yet-another-react-lightbox/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ED1D24",
};

export const metadata: Metadata = {
  title: "Dịch vụ cung cấp suất ăn công nghiệp Hạnh Phúc【Uy tín, Chất lượng ™】",
  description: "Đơn vị cung cấp suất ăn công nghiệp chất lượng Hạnh Phúc , suất ăn trường học, suất ăn văn phòng, setup hệ thống bếp công nghiệp, cung cấp thực phẩm sạch Uy tín, Chất lượng, Giá thành hợp lý.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
        />
        <Script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            strategy="beforeInteractive"
        />
        <Script
            src="/bootstrap-5.1.1/js/bootstrap.min.js"
            strategy="afterInteractive"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/imgs/logo/Hạnh Phúc-logo-180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/imgs/logo/Hạnh Phúc-logo-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/imgs/logo/Hạnh Phúc-logo-16.png" />
        <link rel="shortcut icon" href="/assets/imgs/logo/Hạnh Phúc-logo-142.png" />
        <link rel="apple-touch-icon" href="/assets/imgs/logo/Hạnh Phúc-logo-142.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <ImageSlider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
