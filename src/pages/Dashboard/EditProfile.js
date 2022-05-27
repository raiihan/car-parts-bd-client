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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        disabled
                        defaultValue={user?.name}
                        className="input input-bordered"
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text"
                        disabled
                        defaultValue={user?.email}
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Educational Qualification</span>
                    </label>
                    <textarea type="text"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Educational is Required'
                            }
                        })}
                        placeholder="Education"
                        className="input input-bordered"
                        defaultValue={user?.education}
                    ></textarea>
                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.education?.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkedin Profile Link</span>
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
                        className="input input-bordered"
                    />
                    <label className="label">
                        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.linkedin?.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
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
                        className="input input-bordered"
                    />
                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add Location</span>
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
                        className="input input-bordered"
                    ></textarea>
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.location?.message}</span>}
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;