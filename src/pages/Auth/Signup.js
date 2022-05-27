import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import sign from '../../assets/signup.jpg';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import Social from './Social';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate, token])
    if (loading || updating) {
        return <Loading />
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="hidden lg:flex mr-28">
                    <img src={sign} alt='auth' className="max-w-sm rounded-lg" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl text-center pt-5'>Sign Up</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                    placeholder="Your Name" className="input input-bordered" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                                </label>
                            </div>
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
                                    placeholder="email" className="input input-bordered" />
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
                            </div>
                            <p className='text-red-500 text-center'><small>{error?.message || updateError?.message}</small></p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                        <p className='text-center'><small>Do you have an account? <Link to='/login' className='text-primary'>Please Login</Link></small></p>
                        <div className="divider">OR</div>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;