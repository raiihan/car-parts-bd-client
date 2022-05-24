import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const review = {
            name: user.displayName,
            email: user.email,
            rating: parseInt(data.rating),
            review: data.review
        }
        const res = await axios.post('http://localhost:5000/review', review)

        if (res?.data?.insertedId) {
            toast('Successfully Added Your Review');
            reset()
        }
        console.log(res);
    };
    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl p-3 lg:p-8 mt-5">
            <h2 className='text-3xl text-center pt-5'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name")}
                        disabled
                        value={user?.displayName}
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Rating Number</span>
                    </label>
                    <input type="number"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            min: {
                                value: 1,
                                message: 'Must be greater than 0'

                            },
                            max: {
                                value: 5,
                                message: 'Must be smaller than 5'
                            }
                        })}
                        placeholder="Set a Ratting out of 5" class="input input-bordered" />
                    <label class="label">
                        {errors.rating?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.rating?.message}</span>}
                        {errors.rating?.type === 'min' && <span class="label-text-alt text-red-500">{errors?.rating?.message}</span>}
                        {errors.rating?.type === 'max' && <span class="label-text-alt text-red-500">{errors?.rating?.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Review</span>
                    </label>
                    <textarea type="text"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            }
                        })}
                        placeholder="Please Add Review"
                        class="input input-bordered"
                    ></textarea>
                    <label class="label">
                        {errors.review?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.review?.message}</span>}
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button type='submit' class="btn btn-primary">Login</button>
                </div>
            </form>

        </div>
    );
};

export default AddReview;