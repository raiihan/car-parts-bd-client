import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';


const Summary = () => {
    return (
        <div className='px-2 lg:px-20 mt-24 bg-base-200 lg:p-20'>
            <h1 className='text-3xl font-bold p-6'>Your Trusted Auto Parts Partner</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                <div class="stats shadow p-8">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <BsFillPeopleFill size={80} />
                        </div>
                        <div class="stat-value">136+</div>
                        <div class="stat-title">Happy Clients</div>
                    </div>
                </div>
                <div class="stats shadow p-8">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <GiShoppingBag size={80} />
                        </div>
                        <div class="stat-value">3036+</div>
                        <div class="stat-title">Available Products</div>
                    </div>
                </div>
                <div class="stats shadow p-8">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <MdReviews size={80} />
                        </div>
                        <div class="stat-value">183+</div>
                        <div class="stat-title">Total Reviews</div>
                        <div class="stat-desc">17% increase than last month</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Summary;