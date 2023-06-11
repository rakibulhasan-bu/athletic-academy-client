import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SingleClass from "../components/SingleClass";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allCourses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        error &&
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your password or name is invalid",
          });
      });
  }, []);
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center text-3xl font-medium">
        Explore Athletic academy Classes
      </h1>
      <div className="flex gap-12 pt-12">
        {courses?.map((course) => (
          <SingleClass course={course} key={course._id} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
