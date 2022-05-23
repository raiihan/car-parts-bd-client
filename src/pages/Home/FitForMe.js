import React from 'react';
import { toast } from 'react-toastify';
import fitfor from '../../assets/fitForMe.jpg';
import online from '../../assets/online.png';
import workshop from '../../assets/workshop.png';
import car from '../../assets/car.png';

const handleBooking = () => {
    toast('Thanks For Booking. We Contact you latter')
}

const FitForMe = () => {
    return (
        <div className='mt-16 px-20'>
            <div className='flex justify-center'>
                <div className='shadow-lg p-0 lg:p-8 lg:h-[373px]'>
                    <h2 className='text-6xl mb-10'>Fit it <br></br> For Me</h2>
                    <p className='font-bold'>Need a part fitted? No problem!</p>
                    <p className='max-w-sm'>Use our Fit It For Me service and access a completely contactless service with a workshop of your choice to do the job for you.</p>
                    <div class="form-control mt-6">
                        <button onClick={handleBooking} class="btn btn-primary">Booking Now</button>
                    </div>
                </div>
                <img src={fitfor} className='hidden lg:flex' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10'>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={online} alt="Shoes" /></figure>
                    <div class="card-body items-center text-center">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>1</span>
                            </div>
                        </div>
                        <p className='max-w-sm'>Shop online as usual and select the ‘Fit It For Me’ option*</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={workshop} alt="Shoes" /></figure>
                    <div class="card-body items-center text-center">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>2</span>
                            </div>
                        </div>
                        <p className='max-w-sm'>Select a workshop, along with a date and time to suit you</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={car} alt="Shoes" /></figure>
                    <div class="card-body items-center text-center">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>3</span>
                            </div>
                        </div>
                        <p className='max-w-sm'>Take your vehicle to chosen workshop for a contactless drop off</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FitForMe;