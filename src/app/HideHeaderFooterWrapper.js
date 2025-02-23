"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HideHeaderFooterWrapper({ children }) {
  const pathname = usePathname();

  // Routes where the header is hidden but footer is shown
  const hideHeaderRoutes = ["/special-page"];

  // Routes where the footer is hidden but header is shown
  const hideFooterRoutes = ["/contact"];

  // Routes where both header & footer are hidden
  const hideBothRoutes = ["/no-layout"];

  const shouldHideHeader = hideHeaderRoutes.includes(pathname) || hideBothRoutes.includes(pathname);
  const shouldHideFooter = hideFooterRoutes.includes(pathname) || hideBothRoutes.includes(pathname);

  return (
    <>
      {!shouldHideHeader && <Navbar />}
      {children}
      {!shouldHideFooter && <Footer />}
    </>
  );
}