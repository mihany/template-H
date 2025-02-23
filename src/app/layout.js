import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HideHeaderFooterWrapper from "./HideHeaderFooterWrapper";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hoetzin",
  description: "Hoetzin",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#48CFCB" />
        <meta name="theme-color" content="#48CFCB" />
      </Head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <HideHeaderFooterWrapper>{children}</HideHeaderFooterWrapper>
        </body>
      </html>
    </>
    
  );
}
