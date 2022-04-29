import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={signInWithGoogle} className='google-btn'>Google Signup</button>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Type Your Email' />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Type Your Password' />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;