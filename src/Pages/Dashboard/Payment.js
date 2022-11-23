import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Shared/Loader";
import ChackOutForm from "./ChackOutForm";

const stripePromise = loadStripe(
  "pk_test_51M6vRsAQbSi5oGhuWnH0BvPqy2ECt6mIO5CcY10lPfBe7pIwhEPK3C4M7cO8nYP4lVAPlAu6YsGFPyX0gxnIbKJe00HvCRP1dw"
);
const Payment = () => {
  const booking = useLoaderData();
  // const navigation =useNavigation()
  /* if(navigation.state === "loading"){
    return <Loader/>
  } */
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold font-serif text-left ">
        Payment for{" "}
        <span className="border-b-2 border-[#19D3AE]">{booking.name}</span>
      </h1>
      <p className="text-left text-xl mb-6">
        Please pay <strong>${booking.price}</strong> for your application on{" "}
        <span>{booking.appointmentDate}</span> at <span>{booking.slot}</span>
      </p>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <ChackOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
