import Lottie from "react-lottie";
import lottieFile from "../../public/page404.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  document.title = "Error page | Athletic Academy";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container mx-auto">
      <div className="mx-auto max-w-7xl">
        <Lottie options={defaultOptions} height={500} />
      </div>
      <div className="my-4 flex items-center justify-center">
        <Link
          to="/"
          className="btn mb-2 mr-2 rounded-lg px-6 py-2.5 text-center text-2xl font-semibold text-white focus:outline-none focus:ring-4"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
