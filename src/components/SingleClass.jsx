/* eslint-disable react/prop-types */
import { RxAvatar } from "react-icons/rx";
import Swal from "sweetalert2";
import { MdEventAvailable, MdOutlineMail, MdPeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { ImSpinner6 } from "react-icons/im";

const SingleClass = ({ course, refetch }) => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const {
    seats,
    students,
    price,
    instructorName,
    instructorEmail,
    imgURL,
    className,
  } = course || {};
  const [axiosSecure] = useAxiosSecure();

  if (user) {
    const token = localStorage.getItem("access-token");
    fetch(`${import.meta.env.VITE_API_URL}/singleUser/${user?.email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }

  const handleSelectClass = async (course) => {
    if (!user) {
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login and then select class",
      });
    }
    const id = course._id;
    const res = await axiosSecure.put(`/selectClass/${user.email}`, { id });
    console.log(res);
    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire(
        "Successfully Select class!",
        `${course?.className} course is Successfully selected`,
        "success"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You already select ${course?.className} class in your dashboard, Please select another one`,
      });
    }
  };
  if (loading) {
    return (
      <div className="flex w-full items-center justify-center font-bold">
        <ImSpinner6 className="animate-spin text-5xl font-extrabold text-primary" />
      </div>
    );
  }
  return (
    <div
      className={`max-w-sm transform rounded-xl p-4 shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl ${
        seats === 0 ? "bg-red-300" : "bg-gray-100"
      }`}
    >
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">name here</h3> */}
      <div className="relative">
        <img className="h-64 w-full rounded-xl" src={imgURL} alt="Colors" />
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
          <MdPeople />
          <p>Students: {students || 0}</p>
        </div>
        <div className="flex items-center space-x-2 text-lg font-medium text-gray-800">
          <MdEventAvailable />
          <p>Available seats: {seats}</p>
        </div>
        <button
          disabled={
            currentUser?.role === "admin" ||
            currentUser?.role === "instructor" ||
            seats === 0
          }
          onClick={() => handleSelectClass(course)}
          className={`mt-4  w-full rounded-xl px-3 py-2 text-xl font-medium shadow-lg ${
            currentUser?.role === "admin" ||
            currentUser?.role === "instructor" ||
            seats === 0
              ? "cursor-not-allowed border-gray-500 bg-gray-300 text-gray-700"
              : "border-primary bg-primary text-white"
          }`}
        >
          Select Class
        </button>
      </div>
    </div>
  );
};

export default SingleClass;
