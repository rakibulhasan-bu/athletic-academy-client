import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NavMobile from "../Shared/NavMobile";

const MainLayout = () => {
  const { mobileNav } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      {/* mobile nav here  */}
      <div
        className={`${
          mobileNav ? "right-0" : "-right-full"
        } fixed top-0 z-10 h-full transition-all duration-200`}
      >
        <NavMobile />
      </div>
      <Outlet />
      {/* <div className="min-h-[464px]"></div> */}
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
