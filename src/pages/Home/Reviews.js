import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { AiFillStar } from 'react-icons/ai';
import { useQuery } from 'react-query';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('rating', () => fetch('https://car-parts-server.vercel.app//review').then(res => res.json()));
    if (isLoading) {
        return <p>loadding...</p>
    }
    return (
        <div className='lg:px-20 mt-24'>
            <h1 className='text-3xl font-bold p-6'>Customer Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    reviews?.slice(0, 6).map(review => (<div
                        key={review._id}
                        className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{review.name}</h2>
                            <div className='flex justify-center items-center'><p>Rating: <span className='font-bold'>{review.rating}</span> out of <span className='font-bold'>5</span></p> <p>
                                <StarRatingComponent
                                    name="rating"
                                    editing={false}
                                    renderStarIcon={() => <span><AiFillStar /></span>}
                                    starCount={5}
                                    value={review.rating}
                                />
                            </p></div>
                            <p>{review.review}</p>
                        </div>
                    </div>))
                }




            </div>
        </div>
    );
};

export default Reviews;