import { NavLink, Outlet } from "react-router-dom";
import {
  BsCreditCard2Back,
  BsFillGridFill,
  BsUiChecksGrid,
  BsPersonVideo2,
  BsFillPeopleFill,
} from "react-icons/bs";
import { MdOutlineClass, MdOutlineHistoryToggleOff } from "react-icons/md";
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
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const DashboardLayout = () => {
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex dark:bg-gray-800 dark:text-gray-100">
      <div className="h-screen w-1/2 overflow-y-auto bg-gray-50 px-6 py-20 text-lg dark:bg-gray-800 md:w-1/5">
        {/* these is links based on user admin and instractor  */}
        <ul className="space-y-2 font-medium">
          {isStudent && (
            <>
              <li>
                <NavLink
                  to="/dashboard/selectedClasses"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <MdOutlineClass className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Selected Classes
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/payment"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <BsCreditCard2Back className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Payment</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/enrolledClasses"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <SiGoogleclassroom className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Enrolled Classes
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <MdOutlineHistoryToggleOff className="text-2xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Payment History
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/myClass"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <BsFillGridFill className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    My Classes
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addAClass"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <AiOutlineVideoCameraAdd className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Add a class
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
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
                  className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
                >
                  <HiUserGroup className="text-xl font-bold" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Manage users
                  </span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {/* these is general links for all  */}
        <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
            >
              <AiFillHome className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
            >
              <BsPersonVideo2 className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Classes</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
            >
              <BsFillPeopleFill className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Instructors</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLogOut}
              to="/login"
              className="flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-200 hover:text-primary dark:text-gray-100 hover:dark:text-gray-600"
            >
              <AiOutlineLogout className="text-xl font-bold" />
              <span className="ml-3 flex-1 whitespace-nowrap">Log Out</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* these is right side  */}
      <div className="w-1/2 md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
