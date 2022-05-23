import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios'
import banner from '../../assets/banner.jpg';
import SingleParts from './SingleParts';

const Parts = () => {
    const [carParts, setCarParts] = useState([]);
    // const { isLoading, error, data } = useQuery('repoData', () =>
    //     fetch('parts.json').then(res =>
    //         res.json()
    //     )
    // )
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setCarParts(data))
    }, [])
    return (

        <section className='flex flex-col lg:flex-row lg:px-20 mt-24'>
            <div className=' lg:w-2/5 pr-4 flex items-center'>
                <div className=''>
                    <h1 className='text-3xl'>Auto Body Parts {carParts.length}</h1>
                    <img src={banner} alt="" className='p-8 hidden lg:block' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-3/5'>
                {
                    carParts.map(parts => <SingleParts
                        key={parts._id}
                        parts={parts}
                    />)
                }
            </div>
        </section>
    );
};

export default Parts;