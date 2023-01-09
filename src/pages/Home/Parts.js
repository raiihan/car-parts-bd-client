import React from 'react';
import { useQuery } from 'react-query';
import banner from '../../assets/banner.jpg';
import SingleParts from './SingleParts';
import Loading from '../Shared/Loading';

const Parts = () => {
    const { isLoading, data: carParts } = useQuery('carParts', () =>
        fetch('https://car-parts-bd-server.onrender.com//parts').then(res =>
            res.json()
        )
    );

    if (isLoading) {
        return <Loading />
    }
    return (

        <section className='flex flex-col lg:flex-row lg:px-20 mt-16' id='parts'>
            <div className=' lg:w-2/5 pr-4 flex items-center'>
                <div className=''>
                    <h1 className='text-3xl'>Auto Body Parts</h1>
                    <img src={banner} alt="" className='p-8 hidden lg:block' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-3/5'>
                {
                    carParts?.slice(0, 4).map(parts => <SingleParts
                        key={parts._id}
                        parts={parts}
                    />)
                }
            </div>
        </section>
    );
};

export default Parts;