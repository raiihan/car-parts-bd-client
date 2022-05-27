import React, { useEffect } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate, token])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="form-control">
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-primary">Continue With Google</button>
            <p className='text-red-500 text-center'><small>{error?.message}</small></p>
        </div>
    );
};

export default Social;