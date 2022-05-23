import React, { useState } from 'react';

const NewsLetter = () => {
    const [checked, setChecked] = useState(false)
    return (
        <div className='w-full lg:w-2/3 mx-auto mt-16'>
            <h2 className='text-3xl font-bold mb-3'>Sign Up for Newsletter</h2>
            <div className='shadow-xl p-8 '>
                <div className='text-lg mb-3'>
                    <p className='mb-3'>It's quick and easy to register to receive our e-mail newsletter for the latest updates, special offers and promotions.</p>
                    <p className='mb-3'>We will never release your personal details to any company outside Car Parts BD for mailing or marketing purposes.</p>
                    <p>If you would like to receive our newsletter via email please complete the requested information below. You can unsubscribe at any time by clicking the unsubscribe link at the bottom of every marketing email.</p>
                </div>

                <form>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered" />
                    </div>

                    <div class="form-control mt-5">
                        <label class=" cursor-pointer  flex items-center">
                            <input type="checkbox"
                                onClick={() => setChecked(!checked)}
                                checked={checked ? 'checked' : ''} class="checkbox checkbox-primary" />
                            <span class="label-text ml-5">Accept Term & condition</span>
                        </label>
                    </div>
                    <div class="form-control w-2/4 mx-auto mt-6">
                        <button type='submit' disabled={!checked} class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;