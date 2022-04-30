import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

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
                        <button onClick={() => signOut(auth)} className='signout-btn'>Sign out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
                <span className='header-user'>{user?.displayName}</span>
            </nav>
        </div>
    );
};

export default Header;