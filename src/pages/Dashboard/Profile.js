import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../Firebase/Firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);

    const [profile, setProfile] = useState({});
    useEffect(() => {
        const email = user?.email;
        if (email) {
            (async () => {
                const { data } = await axiosPrivate.get(`/user?email=${email}`);
                setProfile(data);
            })()
        }
    }, [user?.email])

    return (
        <div>

            <div class="card max-w-lg bg-base-100 shadow-xl my-10">
                <div class="card-body text-center">
                    <h2 class="text-xl">Name:- <span className='font-bold'>{profile?.name}</span></h2>
                    <p className='text-lg font-bold'>Email: {profile.email}</p>
                    {profile?.education && <p>Education:  <span className='text-lg font-bold'> {profile.education}</span></p>}
                    {profile?.linkedin && <p>Linkedin Profile: <span className='text-lg font-bold'> {profile.linkedin}</span></p>}
                    {profile?.phone && <p>Phone Number: <span className='text-lg font-bold'> {profile.phone}</span></p>}
                    {profile?.location && <p>Location Number: <span className='text-lg font-bold'> {profile.location}</span></p>}
                    <Link to={`/dashboard/editprofile/${profile._id}`} className='btn btn-secondary'>Edit Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;