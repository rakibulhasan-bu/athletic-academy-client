import { NavLink, Outlet } from "react-router-dom";
import {
  BsCreditCard2Back,
  BsFillGridFill,
  BsUiChecksGrid,
} from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import {
  AiFillHome,
  AiOutlineLogout,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex">
      <div className="h-screen w-1/5 overflow-y-auto bg-gray-50 px-6 py-10 text-lg dark:bg-gray-800">
        {/* these is links based on user admin and instractor  */}
        <ul className="space-y-2 font-medium">
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
                >
                  <BsUiChecksGrid className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Manage Classes
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageUsers"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
                >
                  <HiUserGroup className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Manage users
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/dashboard/myClass"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <BsFillGridFill className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">My Classes</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/addAClass"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <AiOutlineVideoCameraAdd className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Add a class</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/selectedClasses"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <MdOutlineClass className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">
                Selected Classes
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/enrolledClasses"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <SiGoogleclassroom className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">
                Enrolled Classes
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <BsCreditCard2Back className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Payment</span>
            </NavLink>
          </li>
        </ul>
        {/* these is general links for all  */}
        <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <AiFillHome className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLogOut}
              to="/login"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary"
            >
              <AiOutlineLogout className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* these is right side  */}
      <div className="w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
