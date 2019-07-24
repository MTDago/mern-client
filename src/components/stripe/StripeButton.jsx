import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import '../../App.sass';

const stripeButton = () => {
    const publishableKey = 'pk_test_r1EmAHl6wPYYC0jA3wwdTYHC00JafccmBa';

    const onToken = token => {
        const body = {
            amount: 999,
            token: token.id
        };

        axios
            .post('http://localhost:3000/payment', body)
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
            label="Buy Now"
            // name={this.props.title}
            // description={this.props.blurb}
            // amount={this.props.cost}
            token={onToken}
            stripeKey={publishableKey}
            billingAddress={false}
        />
    );
};
export default stripeButton;
