import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import '../App.sass'



const stripeButton = () => {
  const publishableKey = "pk_test_r1EmAHl6wPYYC0jA3wwdTYHC00JafccmBa"
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token.id
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
    className="button is-rounded"
      label="Buy Now" 
      name="Jo book title" 
      description="sci fi book."    
    //   amount={999} 
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default stripeButton;