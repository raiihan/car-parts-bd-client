import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import baseurl from '../../api/baseurl';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [imageURL, setImageURL] = useState("");

    const handleImage = (e) => {
        const image = e.target.files[0];

        const formData = new FormData();

        formData.set("image", image);

        (async () => {
            const { data } = await axios.post('https://api.imgbb.com/1/upload?key=12a92eac1719659d1b57fca3b97a432c', formData)
            setImageURL(data.data.display_url);
        })()
    };


    const onSubmit = async inputData => {
        const parts = {
            name: inputData.name,
            type: inputData.type,
            price: parseInt(inputData.price),
            minimumQnt: parseInt(inputData.minimumQnt),
            availableQnt: parseInt(inputData.availableQnt),
            details: inputData.details,
            img: imageURL,
        };

        const { data } = await baseurl.post('/parts', parts);
        if (data.insertedId) {
            toast('Your Product added Successfully');
            reset();
        }
    }
    return (
        <div className='w-full lg:w-3/5 mx=auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                        placeholder='Add a Product Name' className="input input-bordered" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <input type="text"
                        {...register("type", {
                            required: {
                                value: true,
                                message: 'Product Type is Required'
                            }
                        })}
                        placeholder='Add Product Type' className="input input-bordered" />
                    <label className="label">
                        {errors.type?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.type?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Unit Price</span>
                    </label>
                    <input
                        type="number"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Unit Price is Required'
                            }
                        })}
                        placeholder="Minimum Quantity"
                        className="input input-bordered" />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Minumum Quantity</span>
                    </label>
                    <input
                        type="number"
                        {...register("minimumQnt", {
                            required: {
                                value: true,
                                message: 'Minumum Quantity is Required'
                            }
                        })}
                        placeholder="Minimum Quantity"
                        className="input input-bordered" />
                    <label className="label">
                        {errors.minimumQnt?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.minimumQnt?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number"
                        {...register("availableQnt", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            }
                        })}
                        placeholder='Available Quantity' className="input input-bordered" />
                    <label className="label">
                        {errors.availableQnt?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.availableQnt?.message}</span>}
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="file"
                        onChange={handleImage}
                        required placeholder='Add a Image' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text"
                        {...register("details", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                        placeholder='Description' className="input input-bordered" ></textarea>
                    <label className="label">
                        {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.details?.message}</span>}
                    </label>
                </div>
                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-primary">ADD PRODUCT</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;