import Lottie from "react-lottie";
import lottieFile from "../../../public/dashboard-animation.json";
const DashboardHome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mt-8 flex min-h-screen flex-col items-center justify-center">
      <h1 className="pb-8 text-4xl">Welcome to Athletic Academy</h1>
      <Lottie options={defaultOptions} height={600} />
    </div>
  );
};

export default DashboardHome;
