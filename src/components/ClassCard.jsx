const ClassCard = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] px-2">
        <div className="mx-auto w-full  max-w-md overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="mx-auto max-w-md">
            <div
              className="h-[236px]"
              style="background-image:url(https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6);background-size:cover;background-position:center"
            ></div>
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
                Our shrimp sauce is made with mozarella, a creamy taste of
                shrimp with extra kick of spices.
              </p>

              <a
                href="foodiesapp://food/1001"
                className="mt-10 block w-full transform rounded-[14px] bg-[#FFC933] px-4 py-3 text-center font-medium capitalize tracking-wide transition-colors duration-300 hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                View on foodies
              </a>
              <a
                href="https://apps.apple.com/us/app/id1493631471"
                className="mt-1.5 block w-full transform rounded-[14px] px-4 py-3 text-center font-medium capitalize tracking-wide transition-colors duration-300 hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Download app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;