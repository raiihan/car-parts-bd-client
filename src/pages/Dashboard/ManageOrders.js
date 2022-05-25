import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import baseurl from '../../api/baseurl';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.get(`/orders`);
            setOrders(data)
        })()
    }, [])
    return (
        <div>
            <h2 className='text-xl mb-4'>Manage All Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Shipped</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.partsName}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price}</td>
                                <td>unpaid</td>
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

export default ManageOrders;