import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import Swal from "sweetalert2";
import { useEffect } from "react";

const stripePromiseKey = loadStripe(import.meta.env.VITE_PK_KEY);
const Payment = () => {
  const location = useLocation();
  const selectClass = location.state?.selectClass;
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/dashboard/selectedClasses");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Select class by make payment button",
      });
    }
  }, [navigate, location.state]);
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-8">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Easy and Fast Payments
        </h2>
        <p className=" text-gray-600 dark:text-gray-400 sm:text-xl lg:mb-16">
          Make payment for {selectClass?.className} Class
        </p>
      </div>
      <div className="p4">
        <Elements stripe={stripePromiseKey}>
          <CheckOutForm selectClass={selectClass} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
