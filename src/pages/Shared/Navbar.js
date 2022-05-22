import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuLi = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink to='/blog'>Blog</NavLink></li>
        <li className='mx-2'><NavLink to='/about'>About</NavLink></li>
        <li className='mx-2'><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div class="navbar lg:px-20 bg-red-100">
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
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuLi}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;