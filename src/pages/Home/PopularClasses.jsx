import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import PopularClassId from "../../components/PopularClassId";

const PopularClasses = () => {
  const {
    data: popularClasses = [],
    isLoading,
    error,
    refetch,
  } = useQuery(["popularClasses"], async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/popularClasses`
    );
    return res.data;
  });
  console.log(popularClasses);
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
    <div className="container mx-auto px-6 pb-6 text-gray-500 md:px-12 xl:px-0">
      <div className="container mx-auto flex justify-center pt-16">
        <div>
          <p className="pb-3 text-center text-lg font-normal text-gray-500">
            Top-Rated Classes
          </p>
          <h1 className="mx-auto w-full pb-6 text-center text-3xl font-semibold text-gray-800 xl:text-4xl">
            Discover Highly Recommended Classes by Our Students
          </h1>
        </div>
      </div>
      <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
        {popularClasses?.map((popularClass) => (
          <PopularClassId
            key={popularClass._id}
            refetch={refetch}
            popularClass={popularClass}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
