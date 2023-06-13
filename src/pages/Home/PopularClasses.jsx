import PopularClassId from "../../components/PopularClassId";
import { useState } from "react";
import { useEffect } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/popularClasses`)
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  return (
    <div className="container mx-auto px-6 pb-6 text-gray-500 dark:bg-gray-800 md:px-12 xl:px-0">
      <div className="container mx-auto flex justify-center pt-16">
        <div>
          <p className="pb-3 text-center text-lg font-normal text-gray-500 dark:text-gray-200">
            Top-Rated Classes
          </p>
          <h1 className="mx-auto w-full max-w-2xl pb-6 text-center text-3xl font-semibold text-gray-800 dark:text-gray-100 xl:text-4xl">
            Discover Highly Recommended Classes by Our Students
          </h1>
        </div>
      </div>
      <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
        {popularClasses?.map((popularClass) => (
          <PopularClassId key={popularClass._id} popularClass={popularClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
