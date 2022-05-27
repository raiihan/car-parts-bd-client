import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import authImg from '../../assets/auth.jpg';
import Social from './Social';
import auth from '../../Firebase/Firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

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

    const [token] = useToken(user);
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
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate, token])

    if (loading || sending) {
        return <Loading />
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="hidden lg:flex mr-28">
                        <img src={authImg} alt='auth' className="max-w-sm rounded-lg" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-3xl text-center pt-5'>Login</h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
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
                                        className="input input-bordered"
                                        onChange={(e) => setResetEmail(e.target.value)}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
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
                                        placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                    </label>

                                    <label className="label flex justify-end">
                                        <button
                                            onClick={resetPassword}
                                            className="label-text-alt link link-hover">Forgot password?</button>
                                    </label>
                                </div>
                                <p className='text-red-500 text-center'><small>{error?.message || resetError?.message}</small></p>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className='text-center'><small>Are you new to Car parts? <Link to='/signup' className='text-primary'>Create an Account</Link></small></p>
                            <div className="divider">OR</div>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;