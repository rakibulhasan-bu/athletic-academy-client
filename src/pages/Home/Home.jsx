import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import Testimonial from "./Testimonial";
import TopSlider from "./TopSlider";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.1 } }}
      className="dark:bg-gray-800 dark:text-gray-100"
    >
      <TopSlider />
      <PopularClasses />
      <PopularInstructor />
      <Testimonial />
    </motion.div>
  );
};

export default Home;
