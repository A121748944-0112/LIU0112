import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 這裡修改了 SEO 元數據，讓你的作品集在搜尋引擎上更專業
export const metadata: Metadata = {
  title: "Qianyu | SEO & Web Content Portfolio",
  description: "專業 SEO 關鍵字佈局與前端開發作品集，展示單季營收 300 萬之實戰成就。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}