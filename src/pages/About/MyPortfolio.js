import React from 'react';
import inventory from '../../assets/product-inventory.png';
import fitness from '../../assets/silvan-fitness-care.png';
import review from '../../assets/reviews-point.png';

const MyPortfolio = () => {
    return (
        <div className='container mx-auto mt-24'>
            <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto mt-5 md:mt-0 ">
                <h4 className='text-xl w-full lg:w-4/5'>Hey, This is <span className='font-bold text-green-300'>Raihan</span> and I'm a junior web developer, my goal is to be a professional full stack web developer, and Still learning new Technology. I completed my masters at Kabi Nazrul Govt. College.But Nowadays I'm Learning and practicing Programing Language</h4>
                <h3 className='text-2xl mt-8 mb-3'>My Skill of Technologies:-</h3>
                <ol>
                    <li className='font-bold'> 1. React</li>
                    <li className='font-bold'> 1. JavaScript</li>
                    <li className='font-bold'> 1. Tailwindcss</li>
                    <li className='font-bold'> 4. Bootstrap</li>
                    <li className='font-bold'> 5. NodeJS</li>
                    <li className='font-bold'> 6. ExpressJS</li>
                    <li className='font-bold'> 7. Mongodb</li>
                    <li className='font-bold'> 8. Firebase</li>
                    <li className='font-bold'> 9. Heroku</li>
                    <li className='font-bold'> 10. Netlify</li>
                </ol>
                <h3 className='text-2xl mt-8 mb-3'>My Contacts:-</h3>
                <p>Fill Free To Email me: <a href="http://raiihanbd@gmail.com" target="_blank" rel="noopener noreferrer">raiihanbd@gmail.com</a></p>
                <p>Linkedin:- <a href="http://www.linkedin/in/raiihan" target="_blank" rel="noopener noreferrer">Linkedin Profile</a></p>

                <h3 className='text-2xl mt-8 mb-3'>My Recent Projects:-</h3>
                <p className='text-xl'> Please Click Here: <a className='font-bold text-blue-500' href="https://product-inventory-f466c.web.app/" target="_blank" rel="noopener noreferrer">Cars Inventory</a></p>
                <figure>
                    <img className='w-full lg:w-3/4' src={inventory} alt="" />
                </figure>
                <p className='mt-8 mb-3 text-xl'> Please Click Here: <a className='font-bold text-blue-500' href="https://silvan-fitness-care.web.app/" target="_blank" rel="noopener noreferrer">Fitness Care</a></p>
                <figure>
                    <img className='w-full lg:w-3/4' src={fitness} alt="" />
                </figure>
                <p className='mt-8 mb-3 text-xl'> Please Click Here: <a className='font-bold text-blue-500' href="https://reviews-point.netlify.app/" target="_blank" rel="noopener noreferrer">Review Point</a></p>
                <figure>
                    <img className='w-full lg:w-3/4' src={review} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default MyPortfolio;