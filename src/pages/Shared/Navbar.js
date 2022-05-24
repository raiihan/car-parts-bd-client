import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const { pathname } = useLocation();
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessJWT');
    }

    const menuLi = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        {user && <li className='mx-2'><NavLink to='/dashboard'>Dashboard</NavLink></li>}
        <li className='mx-2'><NavLink to='/blog'>Blog</NavLink></li>
        <li className='mx-2'><NavLink to='/about'>About</NavLink></li>
        {
            user
                ?
                <>
                    <li onClick={logout} className='mx-2'><NavLink to='/login'>Log Out</NavLink></li>
                    <p className='btn'>{user?.displayName}</p>
                </>
                :
                <li className='mx-2'><NavLink to='/login'>Login</NavLink></li>
        }

    </>
    return (
        <div class="navbar lg:px-20  fixed bg-base-200 text-base-content top-0 z-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLi}
                    </ul>
                </div>

                <Link to='/' class="btn btn-ghost normal-case text-xl">Car Parts BD</Link>



            </div>
            {/* Dashbord Navbar Toggle*/}
            {pathname.includes('dashboard') && <label for="dashboard-drawer" class="btn btn-ghost drawer-button navbar-end lg:hidden">
                <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            </label>}
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuLi}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;