import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const MyOrderDelete = ({ deleteOrder, setDeleteOrder }) => {

    const handleDelete = async () => {
        const { data } = await axiosPrivate.delete(`/order/${deleteOrder._id}`)
        if (data.deletedCount) {
            toast('Your Product deleted successfully');
            setDeleteOrder('')
        }
    }
    return (
        <div>

            <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are want to sure delete Order</h3>
                    <p className="py-4">If you Delete once can't restore </p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete()}
                            className='btn btn-xs btn-error'>Yes</button>
                        <label htmlFor="order-delete-modal" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDelete;