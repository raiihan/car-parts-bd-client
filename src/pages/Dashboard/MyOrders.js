import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import baseurl from '../../api/baseurl';
import auth from '../../Firebase/Firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const email = user?.email;
        (async () => {
            const { data } = await baseurl.get(`/orders/${email}`);
            setOrders(data)
        })()
    }, [user.email])

    return (
        <div>
            <h2 className='text-xl mb-4'>Orders Detail</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.partsName}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price}</td>
                                <td>
                                    {<Link className='btn btn-xs btn-secondary' to={`/dashboard/payment/${order._id}`}>Please Pay</Link>}
                                </td>
                                <td>X</td>
                            </tr>)
                        }
                        {/* {
                            appointments.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        } */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;