import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';

const EditProfile = () => {
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.get(`/user/${id}`);
            setUser(data);
        })()
    }, [id])
    const onSubmit = async updateData => {
        const { data } = await axiosPrivate.patch(`/user/${user._id}`, updateData);
        if (data.modifiedCount > 0) {
            toast('Your Profile is Updataed');
            navigate('/dashboard/profile');
        }
    };
    return (
        <div>
            <h2 className='text-3xl text-center pt-5'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                        defaultValue={user?.name}
                        class="input input-bordered"
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.name?.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text"
                        disabled
                        defaultValue={user?.email}
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Educational Qualification</span>
                    </label>
                    <textarea type="text"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Educational is Required'
                            }
                        })}
                        placeholder="Education"
                        class="input input-bordered"
                        defaultValue={user?.education}
                    ></textarea>
                    <label class="label">
                        {errors.education?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.education?.message}</span>}
                    </label>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Linkedin Profile Link</span>
                    </label>
                    <input type="text"
                        {...register("linkedin", {
                            required: {
                                value: true,
                                message: 'Linkedin is Required'
                            }
                        })}
                        defaultValue={user?.linkedin}
                        placeholder="Linkedin Profile"
                        class="input input-bordered"
                    />
                    <label class="label">
                        {errors.linkedin?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.linkedin?.message}</span>}
                    </label>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input type="text"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: 'Phone is Required'
                            }
                        })}
                        defaultValue={user?.phone}
                        placeholder="Phone Number"
                        class="input input-bordered"
                    />
                    <label class="label">
                        {errors.phone?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.phone?.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Add Location</span>
                    </label>
                    <textarea type="text"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Location is Required'
                            }
                        })}
                        defaultValue={user?.location}
                        placeholder="Location"
                        class="input input-bordered"
                    ></textarea>
                    <label class="label">
                        {errors.location?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.location?.message}</span>}
                    </label>
                </div>

                <div class="form-control mt-6">
                    <button type='submit' class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;