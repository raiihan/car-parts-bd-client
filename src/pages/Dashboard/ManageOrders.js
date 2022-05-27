import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import MyOrderDelete from './MyOrderDelete';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [shipped, setShipped] = useState(false);
    const [deleteOrder, setDeleteOrder] = useState(null)

    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.get(`/orders`);
            setOrders(data)
        })()
    }, [shipped, deleteOrder])

    const updateOrderStatus = async id => {
        const { data } = await axiosPrivate.patch(`/orderstatus/${id}`)
        if (data.modifiedCount > 0) {
            setShipped(true);
            toast('Order Shipped')
        }
    }
    return (
        <div>
            <h2 className='text-xl mb-4'>Manage All Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                <td>{order.paid ? <p className='text-green-500'>Paid</p> : <p className='text-red-500'>Unpaid</p>}</td>
                                <td>
                                    {order.status === 'pending' && <button onClick={() => updateOrderStatus(order._id)} className='btn btn-xs  btn-warning'>Pending</button>}
                                    {order.status === 'shipped' && <p className='text-green-500'>Shipped</p>}
                                    {!order.status && <label htmlFor="order-delete-modal" className='btn btn-xs btn-error' onClick={() => setDeleteOrder(order)} >Cancel</label>}
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

export default ManageOrders;