import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CheckOutForm = ({ selectClass }) => {
  const price = selectClass?.price;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        id: selectClass?._id,
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data === "successful") {
          Swal.fire(
            "Make Payment Successful!",
            `You purchase ${selectClass?.className} class`,
            "success"
          );
        }
      });
    }
  };
  return (
    <div className="mx-auto max-w-2xl">
      <form className="m-8 w-2/3" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-8 flex justify-center">
          <button
            className="btn px-4 py-1 text-lg font-medium text-white"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay Now
          </button>
        </div>
      </form>
      {cardError && (
        <p className="ml-8 font-medium text-red-500">{cardError}</p>
      )}
      {transactionId && (
        <p className="font-medium text-green-500">
          Transaction complete your transaction Id is: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
