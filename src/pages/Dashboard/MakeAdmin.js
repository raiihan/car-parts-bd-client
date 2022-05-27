import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const getUsers = async () => {
        const { data } = await axiosPrivate.get('/users');
        return data;
    }
    const { isLoading, data, refetch } = useQuery('users', getUsers);
    if (isLoading) {
        return <Loading />
    }

    const makeAdmin = (email) => {
        fetch(`https://lit-crag-25230.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessJWT')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed To make admin')
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Successfully make an admin');
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-xl mb-4'>Create Admin</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role !== 'admin' ? <button onClick={() => makeAdmin(user.email)} className='btn btn-xs'>Make Admin</button> : <p className='text-secondary'>Already have Admin Role</p>}
                                </td>
                                <td><td> <button className='btn btn-xs'>Delete Admin</button></td></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;