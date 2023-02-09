import styled from "styled-components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectPriceTotal } from "../../store/cart/cart.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const totalPrice = useSelector(selectPriceTotal);
  const [isProcessingPayment, setIsProcessingPament] = useState(false);

  const paymentFormHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPament(true);

    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((res) => res.json());

    const clientSecret = res.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPament(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successfull");
      }
    }
  };

  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentFormHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentContainer>
  );
};

export default PaymentForm;

//styles
const PaymentContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;
