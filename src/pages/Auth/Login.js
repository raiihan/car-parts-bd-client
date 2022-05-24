import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import authImg from '../../assets/auth.jpg';
import Social from './Social';
import auth from '../../Firebase/Firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // Reset Password
    const [
        sendPasswordResetEmail,
        sending,
        resetError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //  Resset Password
    const [resetEmail, setResetEmail] = useState('');
    const resetPassword = async () => {
        if (resetEmail && !resetError?.message) {
            await sendPasswordResetEmail(resetEmail);
            toast.success('Reset Email send. Please Check your Email')
        }
        else {
            toast.error('Please Enter Valid Email')
        }
    }


    if (loading || sending) {
        return <Loading />
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row ">
                    <div class="hidden lg:flex mr-28">
                        <img src={authImg} alt='auth' class="max-w-sm rounded-lg" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-3xl text-center pt-5'>Login</h2>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Please Provide a valid email'
                                            }
                                        })}
                                        placeholder="email"
                                        class="input input-bordered"
                                        onChange={(e) => setResetEmail(e.target.value)}
                                    />
                                    <label class="label">
                                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                    </label>
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Minimum Character Length 6 or Longer'
                                            }
                                        })}
                                        placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                    </label>

                                    <label class="label flex justify-end">
                                        <button
                                            onClick={resetPassword}
                                            class="label-text-alt link link-hover">Forgot password?</button>
                                    </label>
                                </div>
                                <p className='text-red-500 text-center'><small>{error?.message || resetError?.message}</small></p>
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