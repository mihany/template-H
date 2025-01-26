"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HideHeaderFooterWrapper({ children }) {
  const pathname = usePathname();

  // Define the routes where the header or footer should be hidden
  const hideHeaderFooterRoutes = ["/contact", "/special-page"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Navbar />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}