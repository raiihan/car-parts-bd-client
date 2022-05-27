import React from 'react';
import { Link } from 'react-router-dom'
const SingleParts = ({ parts }) => {
    const { name, img, details, price, minimumQnt, availableQnt, _id } = parts;
    return (

        <div className="card max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='mb-3'> {details}</p>
                <p>Minimum Quantity of order:  {minimumQnt}</p>
                <p>Available Quantity of Stock:  {availableQnt}</p>
                <p>Unit Price:  ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> <Link to={`/parts/${_id}`}>Buy Now</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;