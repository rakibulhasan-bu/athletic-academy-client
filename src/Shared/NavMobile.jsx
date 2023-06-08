// import nav data
import { useContext } from "react";

// import icons
import { CgClose } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavMobile = () => {
  const { setMobileNav, user, logOut } = useContext(AuthContext);
  const { displayName, photoURL } = user || {};
  const navigate = useNavigate();
  const handleLogOut = () => {
    setMobileNav(false);
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <nav className="flex h-full w-80 items-center justify-center bg-primary">
      {/* close button  */}
      <div
        onClick={() => setMobileNav(false)}
        className="absolute left-2 top-2 cursor-pointer "
      >
        <CgClose className="text-3xl text-white" />
      </div>
      {/* nav list  */}
      <div className="-mt-40 flex flex-col items-center gap-y-6 text-2xl text-white lg:hidden">
        {user && (
          <img
            src={photoURL}
            className="bg-grey h-8 w-8 cursor-pointer rounded-full"
            title={displayName}
          />
        )}
        <NavLink onClick={() => setMobileNav(false)} to="/">
          Home
        </NavLink>
        <NavLink onClick={() => setMobileNav(false)} to="/instructors">
          Instructors
        </NavLink>
        <NavLink onClick={() => setMobileNav(false)} to="/classes">
          Classes
        </NavLink>
        <NavLink onClick={() => setMobileNav(false)} to="/dashboard">
          Dashboard
        </NavLink>

        <div className="">
          {user && user ? (
            <NavLink to="/login" onClick={handleLogOut}>
              Log out
            </NavLink>
          ) : (
            <NavLink onClick={() => setMobileNav(false)} to="/login">
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
