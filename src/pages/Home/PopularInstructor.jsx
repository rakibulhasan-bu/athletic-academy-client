import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const PopularInstractor = () => {
  const {
    data: popularInstructor = [],
    isLoading,
    error,
  } = useQuery(["popularInstructor"], async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/popularInstructor`
    );
    return res.data;
  });

  if (isLoading) {
    return "loading........";
  }
  if (error) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your Request is not allowed",
    });
  }
  return (
    <div className="container mx-auto">
      <div className="container mx-auto flex justify-center pt-16">
        <div>
          <p className="pb-3 text-center text-lg font-normal text-gray-500">
            Popular Instructors
          </p>
          <h1 className="mx-auto w-5/6 pb-6 text-center text-3xl font-semibold text-gray-800 sm:w-4/6 xl:text-4xl">
            The Talented People Behind the Scenes of the Athletic Academy
          </h1>
        </div>
      </div>
      <div className="grid items-center gap-12 px-10 pt-10 lg:grid-cols-3 ">
        {popularInstructor?.map((instructor) => {
          return (
            <div
              key={instructor._id}
              className="relative mb-32 mt-16 rounded-lg shadow hover:shadow-xl sm:mb-24"
            >
              <div className="overflow-hidden rounded-lg bg-gray-200 shadow-md">
                <div className="absolute -mt-20 flex w-full justify-center">
                  <div className="h-40 w-40">
                    <img
                      src={instructor?.instructorImage}
                      alt="instructor"
                      className="h-full w-full rounded-full object-cover shadow-md"
                    />
                  </div>
                </div>
                <div className="mt-24 px-6">
                  <div className="pb-1 text-center text-3xl font-semibold">
                    {instructor?._id}
                  </div>
                  <p className="text-center text-lg text-gray-800">
                    Instructor
                  </p>
                  <p className=" text-center text-lg text-gray-800">
                    Total Students: {instructor?.totalStudents}
                  </p>
                  <p className="pb-[2px] text-xl text-gray-800">Courses:</p>
                  {instructor?.courses.map((course, i) => (
                    <p key={i} className="font-normal text-gray-600">
                      {i + 1} {course}
                    </p>
                  ))}
                  <div className="flex w-full justify-center pb-5 pt-5">
                    <a href="#" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="#" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularInstractor;
