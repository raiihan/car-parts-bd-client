import React from 'react';
import fit from '../../assets/fit.png';
import connect from '../../assets/Connected.png';
import { useNavigate } from 'react-router-dom';

const ConnectAndFitSection = () => {
    const navigate = useNavigate()
    return (
        <div

            className='flex flex-col lg:flex-row justify-center mt-24'>
            <div
                onClick={() => navigate('/fitforme')}
                className=' shadow-2xl mb-8 sm:mb-0 lg:mr-5 cursor-pointer'>
                <img src={fit} alt="fit" />
            </div>
            <div
                onClick={() => navigate('/newsletter')}
                className=' shadow-2xl  lg:ml-5 cursor-pointer'>
                <img src={connect} alt="fit" />
            </div>

        </div>
    );
};

export default ConnectAndFitSection;