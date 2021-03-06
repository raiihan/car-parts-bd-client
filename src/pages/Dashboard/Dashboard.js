import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile  mt-16">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-center items-center sm:justify-start sm:items-start p-3 lg:p-8  bg-base-300">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold'>Welcome To the Dashboard</h2>
                <div className='w-full'>
                    <Outlet />
                </div>


            </div>
            <div className="drawer-side z-0 mt-12">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {admin
                        ? <>
                            <li><NavLink to="/dashboard/manageorders">Manage All Orders</NavLink></li>
                            <li><NavLink to="/dashboard/addproduct">Add Product</NavLink></li>
                            <li><NavLink to="/dashboard/admin">Make Admin</NavLink></li>
                            <li><NavLink to="/dashboard/manageproduct">Manage Product</NavLink></li>
                        </>
                        : <>
                            <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>
                            <li><NavLink to="/dashboard/addreview">Add Review</NavLink></li>
                        </>}

                    <li><NavLink to="/dashboard/profile">My Profile</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;