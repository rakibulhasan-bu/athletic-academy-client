import Swal from "sweetalert2";
import InstructorCard from "../components/instructorCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ImSpinner6 } from "react-icons/im";
import { motion } from "framer-motion";
const Instructors = () => {
  const {
    data: instructors = [],
    isLoading,
    error,
  } = useQuery(["instructors"], async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/allInstructors`
    );
    return res.data;
  });

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: { error },
    });
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center font-bold">
        <ImSpinner6 className="animate-spin text-9xl font-extrabold text-primary" />
      </div>
    );
  }
  return (
    <motion.section
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.1 } }}
      className="bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-20 lg:px-6 lg:py-20 ">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-8">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Expert Instructors
          </h2>
          <p className="font-light text-gray-600 dark:text-gray-400 sm:text-xl lg:mb-16">
            Discover the Talented Instructors Shaping Our Camp Experience and
            Get Inspired by Our Dedicated Team of Instructors
          </p>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-16">
          {instructors?.map((instructor, i) => {
            return <InstructorCard key={i} instructor={instructor} />;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Instructors;
