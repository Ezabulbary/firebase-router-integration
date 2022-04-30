import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( () => {
            navigate(from, { replace: true });
        })
    }

    return (
        <div className='registers'>
            <h1>Please Login</h1>
            <button className='btn'>Github</button>
            <button onClick={handleGoogleSignIn} className='btn'>Google</button>
            <button className='btn'>Facebook</button>
            <form>
                <input type="email" name="email" id="email" placeholder='Type Your Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password' />
                <br />
                <Link to='/register'>Don't have an Account?</Link>
                <br />
                <button className='register-btn'>Login</button>
            </form>
        </div>
    );
};

export default Login;