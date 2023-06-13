/* eslint-disable react/prop-types */
const InstructorCard = ({ instructor }) => {
  const { totalStudents, popularCourses, name, imgURL, email } =
    instructor || {};

  return (
    <div className="cursor-pointer items-center rounded-lg border bg-gray-100 shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:flex">
      <div className="h-80 w-full md:h-60 md:w-2/5">
        <img
          className="h-full w-full rounded-lg object-cover sm:rounded-none sm:rounded-l-lg"
          src={imgURL}
          alt="Bonnie Avatar"
        />
      </div>
      <div className="w-full p-4 md:w-3/5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <span className="pt-2 text-gray-500 dark:text-gray-400">{email}</span>
        <p className="pb-2 text-gray-500 dark:text-gray-400">Instructor</p>
        <p className=" text-gray-500 dark:text-gray-400">
          Total Students: {totalStudents || 0}
        </p>
        <div className="pb-2 text-gray-500 dark:text-gray-400">
          <p className="">Top {popularCourses.length} Classes:</p>
          {popularCourses.map((pCourse, i) => (
            <p className="text-sm" key={i}>
              {i + 1}. {pCourse}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
