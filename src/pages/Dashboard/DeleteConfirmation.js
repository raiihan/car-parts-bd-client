import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const DeleteConfirmation = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { _id, name } = deleteProduct;
    const handleDelete = async () => {
        const { data } = await axiosPrivate.delete(`/parts/${_id}`)
        if (data.deletedCount) {
            toast('Your Product deleted successfully');
            refetch()
            setDeleteProduct('')
        }
    }
    return (
        <div>
            <div>

                <input type="checkbox" id="parts-delete-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg text-red-500">Are want to sure delete <strong>{name}</strong> Product</h3>
                        <p class="py-4">If you Delete once can't restore </p>
                        <div class="modal-action">
                            <button
                                onClick={() => handleDelete()}
                                className='btn btn-xs btn-error'>Yes</button>
                            <label for="parts-delete-modal" class="btn btn-xs">cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;