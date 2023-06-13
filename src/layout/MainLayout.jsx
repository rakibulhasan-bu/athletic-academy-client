import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NavMobile from "../Shared/NavMobile";
import { AnimatePresence } from "framer-motion";

const MainLayout = () => {
  const location = useLocation();
  const { mobileNav } = useContext(AuthContext);
  return (
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <Navbar />
      {/* mobile nav here  */}
      <div
        className={`${
          mobileNav ? "right-0" : "-right-full"
        } fixed top-0 z-10 h-full transition-all duration-200`}
      >
        <NavMobile />
      </div>
      <AnimatePresence>
        <Outlet location={location} key={location.pathname} />
      </AnimatePresence>
      {/* <div className="min-h-[464px]"></div> */}
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
