import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import '../../App.sass';
import { paymentAPI } from '../../API/init';

const stripeButton = () => {
    const publishableKey = 'pk_test_Ilh9uzxnptCE3QRvTMqeF6zM00Rp98Il5Q';

    const onToken = token => {
        const body = {
            amount: 999,
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
                alert('Payment Error');
            });
    };

    return (
        <StripeCheckout
            className="button is-rounded"
            label="Buy Now with Stripe"
            name={this.props.title}
            description={this.props.blurb}
            amount={this.props.cost}
            token={onToken}
            stripeKey={publishableKey}
            billingAddress={false}
        >
            <button type="button" className="button is-rounded">
                Yeet
            </button>
        </StripeCheckout>
    );
};
export default stripeButton;
