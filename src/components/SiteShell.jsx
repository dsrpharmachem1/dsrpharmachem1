"use client";
import { Toaster } from "sonner";
import { motion, useScroll } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
export default function SiteShell({ children }) {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brick via-brickh to-sky"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </>
  );
}
