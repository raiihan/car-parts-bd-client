import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const PaymentCheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('')

    const { _id, price, customerName, email } = order




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
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        if (error) {
            setCardError(error?.message)
        } else {
            setCardError('')
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-primary mt-5' disabled={!stripe}>
                    Payment
                </button>
            </form>
            {
                cardError && <p className='text-red-500 text-center'>{cardError}</p>
            }

        </>
    );
};

export default PaymentCheckoutForm;