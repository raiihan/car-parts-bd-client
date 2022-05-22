import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../assets/auth.jpg';
import Social from './Social';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // navigate(from, { replace: true })
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row ">
                    <div class="hidden lg:flex mr-28">
                        <img src={auth} alt='auth' class="max-w-sm rounded-lg" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-3xl text-center pt-5'>Login</h2>
                        <div class="card-body">
                            <form >
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
                                    <label class="label flex justify-end">
                                        <a href="/" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className='text-center'><small>Are you new to Car parts? <Link to='/signup' className='text-primary'>Create an Account</Link></small></p>
                            <div class="divider">OR</div>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;