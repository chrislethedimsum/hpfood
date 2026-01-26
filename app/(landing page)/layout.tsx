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
  title: "Dịch vụ cung cấp suất ăn công nghiệp【Uy tín, Chất lượng ™】",
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
        <link rel="apple-touch-icon" sizes="180x180" href="assets/imgs/logo/Hạnh Phúc-logo-180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/imgs/logo/Hạnh Phúc-logo-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/imgs/logo/Hạnh Phúc-logo-16.png" />
        <link rel="shortcut icon" href="assets/imgs/logo/Hạnh Phúc-logo-142.png" />
        <link rel="apple-touch-icon" href="assets/imgs/logo/Hạnh Phúc-logo-142.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <ImageSlider />
        {children}
        <Footer />
      </body>
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`{
        
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Suất ăn công nghiệp Hạnh Phúc",
          "alternateName": "suatancongnghiepHạnh Phúc",
          "@id": "https://Hạnh Phúc.com.vn",
          "url":"https://Hạnh Phúc.com.vn",
          "logo": "https://Hạnh Phúc.com.vn/assets/imgs/logo-h.png",
          "image": "https://Hạnh Phúc.com.vn/assets/imgs/logo-h.png",
          "description": "Hạnh Phúc - Cung cấp suất ăn công nghiệp, suất ăn văn phòng, suất ăn trường học,
            Cung cấp thực phẩm, Setup hệ thống bếp công nghiệp tại Hà Nội.",
          "telephone": " 024 395 33343",
          "priceRange": "100000VND-500000000VND",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tầng 5, Thái Lâm Building, 62 Thanh Liệt, Thanh Trì, Hà Nội",
            "addressLocality": "Thanh Trì",
            "addressRegion": "Hà Nội",
            "postalCode": "100000",
            "addressCountry": "vietnamese"
          },
          "sameAs": [
            "https://suatancongnghiepHạnh Phúc.blogspot.com/2022/09/suat-cong-nghiep-Hạnh Phúc.html",
            "https://www.youtube.com/channel/UCVR0HELNa7UPX8tIFJDYQmw/about",
            "https://twitter.com/suatancnHạnh Phúc",
            "https://www.pinterest.com/suatancongnghiepHạnh Phúc/",
            "https://www.flickr.com/people/suatancongnghiepHạnh Phúc/",
            "https://suatancongnghiepHạnh Phúc.tumblr.com/",
            "https://500px.com/p/suatancongnghiepHạnh Phúc",
            "https://www.diigo.com/profile/suatancnHạnh Phúc",
            "https://vi.gravatar.com/suatancongnghiepHạnh Phúc",
            "https://www.twitch.tv/suatancongnghiepHạnh Phúc/about",
            "https://linktr.ee/suatancongnghiepHạnh Phúc",
            "https://about.me/suatancongnghiepHạnh Phúc/",
            "https://sites.google.com/view/suatancongnghiepHạnh Phúc/trang-ch%E1%BB%A7"
          ]
        }`}
      </Script>
    </html>
  );
}
