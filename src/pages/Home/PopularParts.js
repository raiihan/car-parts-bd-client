import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const PopularParts = () => {
    const { isLoading, data: carParts } = useQuery('carParts', () =>
        fetch('parts.json').then(res =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='lg:px-20 mt-24'>
            <div class="divider text-2xl">Shop by Popular Parts</div>
            <div className='grid grid-cols-1 lg:grid-cols-4 justify-center mt-9 gap-5'>
                {
                    carParts.map(parts => <div
                        className='card  border-2 rounded-none  items-center cursor-pointer hover:bg-secondary hover:text-white'
                        key={parts._id}
                    >
                        <h1 className='card-title text-center p-5'>{parts.type}</h1>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularParts;