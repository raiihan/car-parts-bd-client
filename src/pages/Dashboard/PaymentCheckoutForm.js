import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const PaymentCheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price, customerName, email } = order;

    useEffect(() => {
        if (price) {
            fetch('https://lit-crag-25230.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessJWT')}`
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                })
        }
    }, [price])


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

        setSuccess('');
        setPaymentLoading(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setClientSecret(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess('Your payment is completed!!');

            // update payment status
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://lit-crag-25230.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessJWT')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    if (data) {
                        setPaymentLoading(false);
                    }
                    console.log(data);
                })
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
                <button type="submit" className='btn btn-primary mt-5' disabled={!stripe || !clientSecret || success}>
                    Payment
                </button>
            </form>
            {
                cardError && <p className='text-red-500 text-center'>{cardError}</p>
            }
            {
                success && <div className='text-green-500 text-center'>
                    <p>{success}</p>
                    <p>Payment Transaction Id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }

        </>
    );
};

export default PaymentCheckoutForm;