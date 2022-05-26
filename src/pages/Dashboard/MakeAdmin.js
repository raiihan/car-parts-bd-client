import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.get('/users');
            setUsers(data);
        })()
    }, [])
    return (
        <div>
            <h2 className='text-xl mb-4'>Create Admin</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-xs'>Make Admin</button>
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