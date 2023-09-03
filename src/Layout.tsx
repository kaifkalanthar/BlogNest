import { motion, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar />
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="h-2 w-[100%] bg-primary sticky top-0 z-10"
      ></motion.div>

      <section className="px-5 md:px-20">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
