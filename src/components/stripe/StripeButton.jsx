import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import '../../App.sass';
import { paymentAPI } from '../../API/init';

const stripeButton = ({ name, description, amount }) => {
    const publishableKey = 'pk_test_Ilh9uzxnptCE3QRvTMqeF6zM00Rp98Il5Q';

    const onToken = token => {
        const body = {
            amount: amount,
            token: token.id
        };

        axios
            .post(paymentAPI, body)
            .then(response => {
                console.log(response);
                alert('Payment Success');
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(`Payment Error: ${error}`);
            });
    };

    return (
        <StripeCheckout
            className="button is-rounded"
            label="Buy Now"
            name={name}
            description={description}
            amount={amount * 100}
            token={onToken}
            stripeKey={publishableKey}
            billingAddress={false}
        >
            <button type="button" className="button is-rounded">
                Buy Now
            </button>
        </StripeCheckout>
    );
};
export default stripeButton;
