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

export const metadata: Metadata = {
  title: "Seulgi's Portfolio",
  description:
    "Seulgi의 Frontend Engineer 포트폴리오 | React, Next.js, TypeScript 기반 웹 프로젝트",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Seulgi's Portfolio",
    description: "Seulgi의 Frontend Engineer 포트폴리오",
    url: "https://seulgi-portfolio.vercel.app/", // 배포 URL
    siteName: "Seulgi Portfolio",
    images: [
      {
        url: "/images/seulgi-logo.png", // public 폴더 안에 두면 됨
        width: 1200,
        height: 630,
        alt: "Seulgi Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
