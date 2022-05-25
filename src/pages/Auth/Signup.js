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
    console.log(updateError?.message);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const uname = user?.user?.displayName;
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate, uname])
    if (loading || updating) {
        return <Loading />
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row ">
                <div class="hidden lg:flex mr-28">
                    <img src={sign} alt='auth' class="max-w-sm rounded-lg" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl text-center pt-5'>Sign Up</h2>
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                    placeholder="Your Name" class="input input-bordered" />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors?.name?.message}</span>}
                                </label>
                            </div>
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
                                    placeholder="email" class="input input-bordered" />
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
                            </div>
                            <p className='text-red-500 text-center'><small>{error?.message || updateError?.message}</small></p>
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