import React from 'react';
import img from '../../assets/Loading_icon.gif';

const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col  min-h-screen'>
            <h2 className='text-center text-4xl mb-5 '>Please Keep Patience</h2>
            <img src={img} alt="loading" />
        </div>
    );
};

export default Loading;