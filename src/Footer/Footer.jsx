import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-700 footer'>
          <main className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 mx-16 lg:mx-20 md:mx-16 py-16 gap-10'>
            <div>
                <h1 className='text-2xl font-bold gradient-color'>FutureHub</h1>
                <p className='text-sm mb-4'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <img src="social.png" alt="social-icons" className='social-icon'/>
            </div>
            <div className='footer-company'>
                <Link to='/'>
                    <li className='footer-heading text-lg'>Company</li>
                </Link>
                <Link to='/'>
                    <li>About Us</li>
                </Link>
                <Link to='/'>
                    <li>Latest News</li>
                </Link>
                <Link to='/'>
                    <li>Careers</li>
                </Link>
            </div>
            <div>
                <Link to='/'>
                    <li className='footer-heading text-lg'>Product</li>
                </Link>
                <Link to='/'>
                    <li>Prototype</li>
                </Link>
                <Link to='/'>
                    <li>Plans & Pricing</li>
                </Link>
                <Link to='/'>
                    <li>Customers</li>
                </Link>
                <Link to='/'>
                    <li>Integrations</li>
                </Link>
            </div>
            <div>
                <Link to='/'>
                    <li className='footer-heading text-lg'>Support</li>
                </Link>
                <Link to='/'>
                    <li>Help</li>
                </Link>
                <Link to='/'>
                    <li>Sales</li>
                </Link>
                <Link to='/'>
                    <li>Become a Partner</li>
                </Link>
                <Link to='/'>
                    <li>Developers</li>
                </Link>
            </div>
            <div>
                <Link className='/'>
                    <li className='footer-heading text-lg'>Contact</li>
                </Link>
                <Link className='/'>
                    <li>Dhaka, Bangladesh</li>
                </Link>
                <Link className='/'>
                    <li>+88016-866-213</li>
                </Link>
            </div>
          </main> 
          <div>
            <hr />
          </div>
          <p className='text-center text-slate-200 py-5'>&copy; <span className='font-semibold'>FutureHub.</span> All Rights Reserved</p>
        </div>
    );
};

export default Footer;