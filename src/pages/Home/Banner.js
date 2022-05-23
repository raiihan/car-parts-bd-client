import React from 'react';
import Typewriter from "typewriter-effect";
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div class="hero h-full lg:h-[70vh] bg-base-300 mt-16">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='banner' class="max-w-sm  lg:h-[50vh] rounded-lg shadow-2xl" />
                <div className='max-w-xl'>
                    <p></p>
                    <h1 class="text-4xl font-bold">
                        <Typewriter

                            onInit={(typewriter) => {

                                typewriter

                                    .pauseFor(1000)
                                    .typeString(`Welcome to the <span style="font-weight: bold; text-transform: uppercase;">car parts bd</span>`)
                                    .pauseFor(300)
                                    .deleteAll()
                                    .typeString('Find Best <strong>Parts</strong> For Your <strong>Cars</strong>')
                                    .start();
                            }}
                        />
                    </h1>
                    <p class="py-6"><span className='font-bold'>Car-Parts-BD</span> is your source for auto parts, accessories and advice. Get parts fast with Free Next Day Delivery and Free Store Pick Up at your nearest hub Point.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;