import { NavLink, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { user, logOut, setMobileNav } = useContext(AuthContext);
  const { displayName, photoURL } = user || {};
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed z-10 w-full ${`${
        sticky
          ? "border-b-[1px] bg-white text-black shadow-md"
          : `bg-transparent ${
              location.pathname == "/" ? "text-white" : "text-black"
            }`
      }`}`}
    >
      <div className="container mx-auto flex items-center justify-between py-1">
        {/* these is logo  */}
        <div className="h-14 w-36">
          <NavLink to="/">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686132535/Website-assets/Athletic%20Academy/Athletic_logo_jlsoaw.png"
              alt="logo"
            />
          </NavLink>
        </div>
        {/* these is laptop navigation  */}
        <div className="hidden items-center gap-x-8 text-xl lg:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/instructors">Instructors</NavLink>
          <NavLink to="/classes">Classes</NavLink>

          <div className="">
            {user && user ? (
              <div className="flex items-center gap-x-8">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink onClick={handleLogOut} to="/login">
                  Log out
                </NavLink>
                <img
                  src={photoURL}
                  className="bg-grey h-8 w-8 cursor-pointer rounded-full"
                  title={displayName}
                />
              </div>
            ) : (
              <NavLink to="/login">Log in</NavLink>
            )}
          </div>
        </div>

        {/* these is for mobile navbar  */}
        {/* open nav buttons  */}
        <div
          onClick={() => setMobileNav(true)}
          className="cursor-pointer pr-4 text-2xl lg:hidden"
        >
          <CgMenuRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
