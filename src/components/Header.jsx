import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar flex justify-center bg-[url('/image/header-bg.png')]">

            <Link
                to='/'
                className='font-rancho text-6xl text-white'>
                {' '}
                <img
                    src='/image/coffee_logo.png'
                    alt='Espresso Emporium'
                />
                Espresso Emporium
            </Link>

        </div>
    );
};

export default Header;