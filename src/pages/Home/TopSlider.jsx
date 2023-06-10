// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TopSlider = () => {
  return (
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
      <SwiperSlide>
        <div className="relative bg-black/80">
          <img
            className="relative -z-10 h-full w-full object-contain"
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686315709/Website-assets/Athletic%20Academy/Master_the_Basics_Fundamentals_of_Athletics_lyuesz.jpg"
            alt="Sports Coaching and Leadership"
          />
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Master the Basics: Fundamentals of Athletics
              </h1>
              <p className="py-2 text-xl">
                Develop a strong foundation in athletics with this comprehensive
                course. Learn the essential principles, techniques, and skills
                required for various athletic disciplines, including running,
                jumping, throwing, and agility training.
              </p>
              <p className="mt-8 text-xl">
                Hey! Unlock your athletic potential and lay the groundwork for
                success in any sport. Join our Fundamentals of Athletics course
                and build a solid foundation to excel in your athletic journey.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <div className="-z-10 h-full w-full">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686315818/Website-assets/Athletic%20Academy/Fuel_Your_Performance_Sports_Nutrition_and_Fitness_czhvic.jpg"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/80 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Fuel Your Performance: Sports Nutrition and Fitness
              </h1>
              <p className="py-2 text-xl">
                Discover the power of nutrition and fitness for optimal sports
                performance. Gain valuable insights into meal planning,
                hydration, macronutrients, and sports-specific diets. Develop
                personalized training programs to maximize your athletic
                potential.
              </p>
              <p className="mt-8 text-xl">
                Hey! Unleash your inner athlete by fueling your body right. Join
                our Sports Nutrition and Fitness course to learn the secrets of
                top athletes and achieve peak performance through proper
                nutrition and fitness.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <div className="-z-10 h-full w-full">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686317748/Website-assets/Athletic%20Academy/Unleash_Your_Power_Strength_and_Conditioning_for_Sports_Performance_akfutf.jpg"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/80 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Unleash Your Power: Strength and Conditioning for Sports
                Performance
              </h1>
              <p className="py-2 text-xl">
                Take your athleticism to new heights with our Strength and
                Conditioning course. Enhance strength, power, and endurance
                through weightlifting, resistance training, plyometrics, and
                conditioning exercises tailored to your sport.
              </p>
              <p className="mt-8 text-xl">
                Hey! Unlock your true potential and dominate your sport. Our
                Strength and Conditioning course will empower you with the
                strength, power, and endurance needed to outperform the
                competition.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <div className="-z-10 h-full w-full">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686318195/Website-assets/Athletic%20Academy/Master_Your_Mind_Sports_Psychology_for_Peak_Performance_ghvycd.jpg"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/80 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Master Your Mind: Sports Psychology for Peak Performance
              </h1>
              <p className="py-2 text-xl">
                Gain a mental edge in sports with our Sports Psychology course.
                Learn valuable techniques for mental preparation, focus, goal
                setting, overcoming performance anxiety, and building resilience
                for consistent peak performance.
              </p>
              <p className="mt-8 text-xl">
                Hey! Elevate your game by mastering the power of your mind. Our
                Sports Psychology course will equip you with mental strategies
                to boost confidence, overcome obstacles, and unleash your full
                potential on and off the field.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <div className="-z-10 h-full w-full">
            <img
              className="h-full w-full object-contain"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686318378/Website-assets/Athletic%20Academy/Stay_in_the_Game_Sports_Injury_Prevention_and_Rehabilitation_hsc7lf.jpg"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/80 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Stay in the Game: Sports Injury Prevention and Rehabilitation
              </h1>
              <p className="py-2 text-xl">
                Learn how to prevent and recover from sports injuries with our
                comprehensive course. Explore common sports injuries, injury
                prevention strategies, basic first aid, and effective
                rehabilitation techniques to keep you in the game.
              </p>
              <p className="mt-8 text-xl">
                Hey! Don&apos;t let injuries hold you back. Join our Sports
                Injury Prevention and Rehabilitation course and learn essential
                skills to stay injury-free, recover faster, and get back to
                doing what you love - playing sports.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative bg-black/80">
          <div>
            <img
              className="relative -z-10 h-full w-full object-contain"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686280707/Website-assets/Athletic%20Academy/Sports_Coaching_and_Leadership_gvyvgj.jpg"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Lead to Succeed: Sports Coaching and Leadership
              </h1>
              <p className="py-2 text-xl">
                Discover the art of effective coaching and leadership in the
                world of sports. Develop coaching techniques, team management
                skills, effective communication strategies, and learn how to
                create impactful training programs.
              </p>
              <p className="mt-8 text-xl">
                Hey! Make a difference on and off the field by becoming a
                successful sports coach. Join our Sports Coaching and Leadership
                course and unlock your potential to inspire, motivate, and lead
                athletes to victory.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <div className="-z-10 h-full w-full">
            <img
              className="h-full w-full object-contain"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686320907/Website-assets/Athletic%20Academy/Game_Changers_Sports_Marketing_and_Sponsorship_lga9at.png"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/80 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Game Changers: Sports Marketing and Sponsorship
              </h1>
              <p className="py-2 text-xl">
                Dive into the exciting realm of sports marketing and
                sponsorship. Learn essential skills in brand management,
                sponsorships, event planning, digital marketing, and leveraging
                social media platforms to promote athletes and sports
                organizations.
              </p>
              <p className="mt-8 text-xl">
                Hey! Step into the world of sports marketing and become a game
                changer. Enroll in our Sports Marketing and Sponsorship course
                to learn how to elevate your brand, attract sponsors, and create
                a lasting impact in the sports industry.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full">
          <div className="-z-10 h-full w-full">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686321037/Website-assets/Athletic%20Academy/Sports_Analytics_and_Performance_Tracking_ikrbak.jpg"
              alt="Sports Coaching and Leadership"
            />
          </div>
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/80 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Unlock Your Performance: Sports Analytics and Performance
                Tracking
              </h1>
              <p className="py-2 text-xl">
                Harness the power of data and technology to optimize your
                athletic performance. Explore sports analytics, performance
                tracking tools, and data-driven strategies to analyze and
                improve your skills, prevent injuries, and achieve peak
                performance.
              </p>
              <p className="mt-8 text-xl">
                Hey! Take your performance to the next level with data-driven
                insights. Enroll in our Sports Analytics and Performance
                Tracking course and unlock the secrets to maximizing your
                potential, staying ahead of the competition, and reaching new
                heights in your sport.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative bg-black/80">
          <img
            className="relative -z-10 h-full w-full object-contain"
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686321180/Website-assets/Athletic%20Academy/Sports_Officiating_and_Rules_x0jmvt.jpg"
            alt="Sports Coaching and Leadership"
          />
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Master the Game: Sports Officiating and Rules
              </h1>
              <p className="py-2 text-xl">
                Become an expert in sports officiating and gain a comprehensive
                understanding of the rules and regulations across various
                sports. Learn officiating techniques, fair play principles,
                decision-making skills, and game management strategies.
              </p>
              <p className="mt-8 text-xl">
                Hey! Be the authority on the field. Join our Sports Officiating
                and Rules course to master the game, make accurate calls, and
                ensure fair play. Make your mark as a respected sports official.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative bg-black/80">
          <img
            className="relative -z-10 h-full w-full object-contain"
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1686321324/Website-assets/Athletic%20Academy/Sports_Broadcasting_and_Journalism_ljvbyy.png"
            alt="Sports Coaching and Leadership"
          />
          <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center text-white">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold">
                Unleash Your Voice: Sports Broadcasting and Journalism
              </h1>
              <p className="py-2 text-xl">
                Explore the thrilling world of sports media and storytelling.
                Gain skills in sports reporting, broadcast journalism, sports
                commentary, interviewing techniques, and multimedia production
                to become a dynamic sports media professional.
              </p>
              <p className="mt-8 text-xl">
                Hey! Be the voice of sports and share the stories that inspire.
                Enroll in our Sports Broadcasting and Journalism course and
                unleash your passion for sports through captivating
                storytelling, engaging commentary, and multimedia production.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSlider;
