import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import baseurl from '../../api/baseurl';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';

const PurchasePage = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const [parts, setParts] = useState({});
    const [quantity, setQuantity] = useState('');
    const [btnDisable, setDisable] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await baseurl.get(`/singleparts/${id}`)
            setParts(data.data);
        })()
    }, [id])

    const handleQuantity = (e) => {
        const newQuantity = (e.target.value);
        if (parts.minimumQnt <= newQuantity && parts.availableQnt >= newQuantity) {
            setQuantity(newQuantity)
            setDisable(false);
        }
        else {
            toast.error(`Please Add minimum ${parts.minimumQnt} or Maximum ${parts.availableQnt} Quantity`)
            setDisable(!btnDisable);
        }

    }
    const handleOrder = async (e) => {
        e.preventDefault();
        const order = {
            partsId: id,
            customerName: user?.displayName,
            email: user?.email,
            partsName: parts.name,
            quantity: quantity,
            price: parseInt(parts.price) * parseInt(quantity),
            phone: e.target.phone.value,
            address: e.target.address.value
        }
        const response = await baseurl.post('/order', order);
        if (response.data?.insertedId) {
            toast('Your Order Place Successfully');
            e.target.reset();
        }
    }
    return (
        <div>

            <div class="card card-compact w-full lg:w-4/6 mx-auto mt-16 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex flex-col lg:flex-row justify-around'>
                        <div className='w-full '>
                            <figure  ><img src={parts.img} alt={parts.name} /></figure>
                            <h2 class="card-title">{parts.name}</h2>
                            <div>
                                <span className="font-bold">Description:-</span>
                                <p className='mb-2'> {parts.details}</p>
                            </div>
                            <div className='text-xl'>
                                <p>Minimum Quantity of order:  {parts.minimumQnt}</p>
                                <p>Available Quantity of Stock:  {parts.availableQnt}</p>
                                <p>Unit Price:  ${parts.price}</p>
                            </div>
                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div className='w-full lg:w-2/3'>
                            <h2 class="card-title">Fill the form for purchase</h2>
                            <form onSubmit={handleOrder}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" value={user?.displayName} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" value={user?.email} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Add Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        onBlur={handleQuantity}
                                        placeholder="Please Input Greter Than Minimum Quantity"
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='phone' required placeholder='Add a phone Number' class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Address</span>
                                    </label>
                                    <textarea type="text" required name='address' placeholder='Add your Address' class="input input-bordered" ></textarea>
                                </div>
                                <div class="card-actions justify-center mt-5">
                                    <button disabled={btnDisable} class="btn btn-primary">Buy Now</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PurchasePage;