import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div className='registers'>
            <h1>Please Login</h1>
            <button className='btn'>Github</button>
            <button onClick={signInWithGoogle} className='btn'>Google</button>
            <button className='btn'>Facebook</button>
            <form>
                <input type="email" name="email" id="email" placeholder='Type Your Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password' />
                <br />
                <button className='register-btn'>Login</button>
            </form>
        </div>
    );
};

export default Login;