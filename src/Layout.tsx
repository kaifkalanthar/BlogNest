import { motion, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Navbar />
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="h-2 bg-primary sticky top-0 z-10"
      ></motion.div>

      <section className="p-5 md:p-10">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
