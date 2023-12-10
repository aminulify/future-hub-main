import React, { useState } from 'react';
import './Header.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <div className=''>
            <aside className='flex items-center justify-between mx-10 my-4 short-nav-bar'>
                <div>
                <a href='/' className='text-2xl font-bold gradient-color'>FutureHub</a> 
                </div>
                <div>

                <i onClick={()=>{setMenuOpen(!menuOpen)}} className={`fa-solid ${menuOpen ? 'fa-close' : 'fa-bars'} text-xl gradient-color`}></i>
                 
                </div>
            </aside>
            <header className={`lg:mx-20 md:mx-16 hidden lg:flex md:flex ${menuOpen ? 'nav-bar':''}`}>
                <div><a href='/' className='text-2xl font-bold gradient-color logo-name'>FutureHub</a></div>
                <div className='nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/applied_jobs">Applied Jobs</Link></li>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </div>
                <div>
                    <button className='header-btn'>Start Applying <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;