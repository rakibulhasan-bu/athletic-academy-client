import useMyClasses from "../../hooks/useMyClasses";

const MyClasses = () => {
  const [allClass, refetch] = useMyClasses();
  console.log(allClass);
  return (
    <div className="mx-20 my-20 bg-red-500">
      {allClass?.map((singleClass) => {
        <div
          key={singleClass._id}
          className="mx-auto max-w-xs rounded-3xl bg-white shadow-lg hover:shadow-xl"
        >
          <div className="h-[236px] rounded-t-3xl">
            <img
              className="rounded-t-3xl"
              src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
              alt=""
            />
          </div>
          <div className="p-4 sm:p-6">
            <p className="mb-1 text-[22px] font-bold leading-7 text-gray-700">
              Spagetti with shrimp sauce
            </p>
            <div className="flex flex-row">
              <p className="mr-2 text-[17px] text-[#3C3C4399] line-through">
                MVR 700
              </p>
              <p className="text-[17px] font-bold text-[#0FB478]">MVR 700</p>
            </div>
            <p className="mt-6 font-[15px] text-[#7C7C80]">
              Our shrimp sauce is made with mozarella, a creamy taste of shrimp
              with extra kick of spices.
            </p>

            <a
              href="https://apps.apple.com/us/app/id1493631471"
              className="mt-1.5 block w-full transform rounded-[14px] px-4 py-3 text-center font-medium capitalize tracking-wide transition-colors duration-300 hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Download app
            </a>
            <a
              href="foodiesapp://food/1001"
              className="mt-10 block w-full transform rounded-[14px] bg-[#FFC933] px-4 py-3 text-center font-medium capitalize tracking-wide transition-colors duration-300 hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              View on foodies
            </a>
          </div>
        </div>;
      })}
    </div>
  );
};

export default MyClasses;
