import React from 'react';
import { Link } from 'react-router-dom';
import sign from '../../assets/signup.jpg';
import Social from './Social';

const Signup = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row ">
                <div class="hidden lg:flex mr-28">
                    <img src={sign} alt='auth' class="max-w-sm rounded-lg" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl text-center pt-5'>Sign Up</h2>
                    <div class="card-body">
                        <form >
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Signup</button>
                            </div>
                        </form>
                        <p className='text-center'><small>Do you have an account? <Link to='/login' className='text-primary'>Please Login</Link></small></p>
                        <div class="divider">OR</div>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;