import React from 'react';

const Reviews = () => {
    return (
        <div className='lg:px-20 mt-24'>
            <h1 className='text-3xl font-bold p-6'>Customer Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Joye Walter</h2>
                        <p>Rating 3 out 5</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;