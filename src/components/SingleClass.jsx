/* eslint-disable react/prop-types */
import { RxAvatar } from "react-icons/rx";
import Swal from "sweetalert2";
import { MdEventAvailable, MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SingleClass = ({ course }) => {
  const { seats, price, instructorName, instructorEmail, imgURL, className } =
    course || {};
  const [axiosSecure] = useAxiosSecure();
  const {
    data: selectClass = [],
    refetch,
    isLoading,
    error,
  } = useQuery(["selectClass"], async () => {
    const res = await axiosSecure.get("/selectClass");
    return res.data;
  });
  console.log(se);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleSelectClass = (course) => {
    if (!user) {
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login and then select class",
      });
    }
    console.log(course._id);
  };
  return (
    <div className="max-w-xs transform rounded-xl bg-gray-100 p-4 shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl">
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">name here</h3> */}
      <div className="relative">
        <img className="h-48 w-full rounded-xl" src={imgURL} alt="Colors" />
        <p className="absolute top-0 rounded-br-lg rounded-tl-lg bg-yellow-300 px-3 py-1 font-semibold text-gray-800">
          ${price}
        </p>
      </div>
      <h1 className="mt-2 cursor-pointer text-xl font-bold text-gray-800">
        {className}
      </h1>
      <div className="my-3">
        <div className="flex items-center space-x-2 text-lg font-medium text-gray-800">
          <RxAvatar />
          <p>{instructorName}</p>
        </div>
        <div className="flex items-center space-x-2 text-lg font-medium text-gray-800">
          <MdOutlineMail />
          <p>{instructorEmail}</p>
        </div>
        <div className="flex items-center space-x-2 text-lg font-medium text-gray-800">
          <MdEventAvailable />
          <p>Available seats: {seats}</p>
        </div>
        <button
          onClick={() => handleSelectClass(course)}
          className="mt-4 w-full rounded-xl bg-primary py-2 text-xl text-white shadow-lg"
        >
          Select Class
        </button>
      </div>
    </div>
  );
};

export default SingleClass;
