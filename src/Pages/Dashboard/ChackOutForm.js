import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const ChackOutForm = ({ booking }) => {
  const [cardError, setCartError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, SetProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patientName } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-seven-xi.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCartError(error.message);
    } else {
      setCartError("");
    }

    setSuccess("");
    SetProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCartError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
     
      // console.log("paymentIntent", paymentIntent);
      console.log("cart-info",card);

      const payment ={
        price,
       transaction_id : paymentIntent.id,
       email,
       bookingId : booking._id,

      }

      fetch('https://doctors-portal-server-seven-xi.vercel.app/payments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
              setSuccess("Congrats ! your payment completed successfully");
              setTransactionId(paymentIntent.id);
            }
        })
    }
    SetProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn btn-sm mt-4 bg-[#19D3AE] border-none "
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500 mt-3">{success}</p>
          <p>
            <span>Your TransactionId: </span>{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ChackOutForm;
