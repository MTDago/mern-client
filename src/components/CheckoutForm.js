import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { bookAPI } from '../API/init';
import '../App.sass'

// const CURRENCY = 'AUD';

// const fromAUDToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(bookAPI,
    {
      description,
      source: token.id,
    //   currency: CURRENCY,
    //   amount: fromAUDToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const CheckoutForm = ({ name, description, amount }) =>
  <StripeCheckout
    className='container'
    // name={name}
    // description={description}
    // amount={fromAUDToCent(amount)}
    token={onToken}
    // currency={CURRENCY}
    stripeKey="pk_test_r1EmAHl6wPYYC0jA3wwdTYHC00JafccmBa"
    label='Buy Now'
  />

export default CheckoutForm;