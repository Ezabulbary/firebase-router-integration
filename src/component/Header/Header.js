import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();

    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user?.uid 
                    ?
                        <button onClick={handleSignOut} className='signout-btn'>Sign out</button>
                    :
                    <Link to='/login'>Login</Link>
                }

                <span className='header-user'>{user?.displayName}</span>
            </nav>
        </div>
    );
};

export default Header;