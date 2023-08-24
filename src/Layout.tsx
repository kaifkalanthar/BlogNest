import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="p-10">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
