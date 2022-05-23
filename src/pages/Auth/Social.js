import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (loading) {
        return <Loading />
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div class="form-control">
            <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline btn-primary">Continue With Google</button>
            <p className='text-red-500 text-center'><small>{error?.message}</small></p>
        </div>
    );
};

export default Social;