import React from 'react';
import granted from '../../assets/granted.svg';
import Shipping from '../../assets/Shipping.svg';
import returnProduct from '../../assets/return.svg';

const WhyChooseUs = () => {
    const chooses = [
        {
            "name": "Guaranteed Fit",
            "img": granted,
            "body": "Take the guesswork out of shopping for auto parts with Car Parts BD. We make purchasing car parts online easier by providing accurate and detailed fitment information, which makes for a straightforward and hassle-free shopping experience. Our built-in vehicle selector also allows you to search from our catalog of high-quality aftermarket parts and accessories by year, make, and model—so you're always guaranteed a perfect fit for your vehicle."
        },
        {
            "name": "Fast Shipping",
            "img": Shipping,
            "body": "Get back on the road faster with Car Parts BD. We deliver the parts you need, when you need them. Our three strategically-located auto parts warehouses are equipped with the latest technologies for efficient order processing and faster shipping."
        },
        {
            "name": "90-Day Returns",
            "img": returnProduct,
            "body": "At Car Parts BD, we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. But if for some reason you aren't completely satisfied with your order, <span className='text-blue-400'>we accept returns within 90 days</span> of purchase—and we'll give you your money back! As a leading retailer of aftermarket car parts, our goal is to give our customers the peace of mind to buy parts online."
        },
    ]
    return (
        <>
            <div className="divider text-2xl lg:px-20 mt-24">Why Choose Car Parts BD</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-9 gap-8 bg-base-200 p-2 lg:p-14 lg:px-'>

                {
                    chooses.map((choose, index) => <div key={index}>
                        <h2 className='text-3xl underline text-center'>{choose.name}</h2>
                        <div className='flex justify-center'>
                            <img src={choose.img} width={160} alt="" />
                        </div>
                        <p>{choose.body}</p>
                    </div>)
                }

            </div>
        </ >
    );
};

export default WhyChooseUs;