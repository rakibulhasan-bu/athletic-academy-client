// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const allSlides = [
  {
    name: "Emily Wilson",
    img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686406215/Website-assets/Athletic%20Academy/avatar1_vbv6ow.jpg",
    details:
      "The summer camp exceeded my expectations. I had the opportunity to try new sports and make lifelong friendships. It was a fantastic experience that I'll cherish forever!",
  },
  {
    name: "David Lee",
    img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686406215/Website-assets/Athletic%20Academy/avatar2_wofa0x.jpg",
    details:
      " Attending the summer camp was a game-changer for me. The dedicated coaches pushed me to my limits, and I saw tremendous improvement",
  },
  {
    name: "John doe",
    img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686406215/Website-assets/Athletic%20Academy/avatar4_dpoqct.jpg",
    details:
      "I can't recommend this summer camp enough! The coaches were passionate and dedicated, and the facilities were top-notch. It was a transformation experience that ignited my love for sports and pushed me beyond my limits.",
  },
  {
    name: "Michael Johnson",
    img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686406216/Website-assets/Athletic%20Academy/avatar5_eptxsi.jpg",
    details:
      "The summer camp was a perfect blend of learning, fun, and camaraderie. I made lifelong friends and honed my skills in my favorite sport. It's an experience I would gladly repeat!",
  },
  {
    name: "Jane Smith",
    img: "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686406217/Website-assets/Athletic%20Academy/avatar6_uxqcrc.jpg",
    details:
      "I had an incredible experience at the summer camp. The coaches were knowledgeable and supportive, and I learned valuable skills that improved my performance. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center pt-6">
        <div>
          <p className="pb-3 text-center text-lg font-normal text-gray-500">
            Inspiring Words from Our Students
          </p>
          <h1 className="mx-auto w-5/6 pb-6 text-center text-3xl font-semibold text-gray-800 sm:w-4/6 xl:text-4xl">
            See What Our Students Have to Say About Their Experience
          </h1>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {allSlides?.map((slides, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto my-8 flex max-w-xl flex-col rounded-3xl bg-gray-200">
              <img
                className="h-96 w-full rounded-t-3xl object-cover"
                src={slides?.img}
                alt="Sports Coaching and Leadership"
              />
              <div className="p-4 text-center">
                <h1 className="text-2xl font-semibold">{slides?.name}</h1>
                <p className="pt-1 text-xl">{slides?.details}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
