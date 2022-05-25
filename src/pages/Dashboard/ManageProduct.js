import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const { isLoading, data: carParts } = useQuery('carParts', () =>
        fetch('http://localhost:5000/parts').then(res =>
            res.json()
        )
    );

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-xl mb-4'>Manage Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Unit Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carParts.map((parts, index) => <tr key={parts._id}>
                                <th>{index + 1}</th>
                                <td>{parts.name}</td>
                                <td>{parts.minimumQnt}</td>
                                <td>{parts.availableQnt}</td>
                                <td>${parts.price}</td>
                                <td>X</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;