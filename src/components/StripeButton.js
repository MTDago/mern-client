import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const stripeButton = () => {
  const publishableKey = "pk_test_r1EmAHl6wPYYC0jA3wwdTYHC00JafccmBa"
   
  const onToken = token => {
    const body = {
      amount: '',
      token: token
  };
  axios
      .post("http://localhost:5000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Buy Now" 
      name="Jo book title" 
      description="sci fi book."    
      amount={''} 
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default stripeButton;