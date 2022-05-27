import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import baseurl from '../../api/baseurl';
import PaymentCheckoutForm from './PaymentCheckoutForm';


const stripePromise = loadStripe('pk_test_51L0jHsJyQaN56hQXbYbRHt0pczK8cBrgD0UpVLju38XrjoYvfyNzrZuLhzdn7r1NyTRMROeX40Nl9SbTac20Awib000rwWbaQO');
const Payments = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    useEffect(() => {
        (async () => {
            const data = await baseurl.get(`/order/${id}`)
            setOrder(data.data);
        })()
    }, [id])
    return (
        <div>
            <div>
                <div className="card max-w-lg bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className="card-title">Please Payment For <span className='font-bold'>{order.partsName}</span></h2>
                        <p>Total Quantity: {order.quantity}</p>
                        <p>Total Amount: ${order.price}</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <PaymentCheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;