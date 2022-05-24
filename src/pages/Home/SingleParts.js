import React from 'react';
import { Link } from 'react-router-dom'
const SingleParts = ({ parts }) => {
    const { name, img, details, price, minimumQnt, availableQnt, _id } = parts;
    return (

        <div class="card max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='mb-3'> {details}</p>
                <p>Minimum Quantity of order:  {minimumQnt}</p>
                <p>Available Quantity of Stock:  {availableQnt}</p>
                <p>Unit Price:  ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"> <Link to={`/parts/${_id}`}>Buy Now</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;