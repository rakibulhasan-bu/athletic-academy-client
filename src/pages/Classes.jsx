import Swal from "sweetalert2";
import SingleClass from "../components/SingleClass";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ImSpinner6 } from "react-icons/im";
import { motion } from "framer-motion";
const Classes = () => {
  const {
    data: courses = [],
    refetch,
    isLoading,
    error,
  } = useQuery(["allApprovedCourses"], async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/allApprovedCourses`
    );
    return res.data;
  });
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center font-bold">
        <ImSpinner6 className="animate-spin text-9xl font-extrabold text-primary" />
      </div>
    );
  }
  if (error) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your Request is not allowed",
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.1 } }}
      className="container mx-auto  py-20"
    >
      <h1 className="text-center text-3xl font-medium">
        Explore Athletic academy Classes
      </h1>
      <div className="grid grid-cols-1 gap-12 px-4 pt-12 md:px-0 lg:grid-cols-3">
        {courses?.map((course) => (
          <SingleClass refetch={refetch} course={course} key={course._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Classes;
