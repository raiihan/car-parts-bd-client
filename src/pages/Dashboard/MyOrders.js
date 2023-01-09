import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import MyOrderDelete from './MyOrderDelete';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://car-parts-server.vercel.app//orders/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessJWT')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessJWT');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                });
        }
    }, [user.email, navigate, deleteOrder])

    return (
        <div>
            <h2 className='text-xl mb-4'>Orders Detail</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                <td className='text-center'>
                                    {!order.paid && <Link className='btn btn-xs btn-secondary' to={`/dashboard/payment/${order._id}`}>Please Pay</Link>}
                                    {
                                        order.paid && <div >
                                            <p className='text-green-500'>Already Paid</p>
                                            <p>Transaction Id: <span className='text-green-500'>{order.transactionId}</span></p>
                                        </div>
                                    }
                                </td>
                                <td>
                                    <label disabled={order.transactionId} onClick={() => setDeleteOrder(order)} htmlFor="order-delete-modal" className="btn btn-xs btn-error">Cancel</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <MyOrderDelete
                deleteOrder={deleteOrder}
                setDeleteOrder={setDeleteOrder}
            />}
        </div>
    );
};

export default MyOrders;