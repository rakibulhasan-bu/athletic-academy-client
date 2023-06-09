// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TopSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
          alt="Sports Coaching and Leadership"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSlider;
