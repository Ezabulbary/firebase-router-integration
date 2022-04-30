import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Registers.css';

const Register = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }


    return (
        <div className='registers'>
            <h1>Please Register</h1>
            <button className='btn'>Github</button>
            <button onClick={handleGoogleSignUp} className='btn'>Google</button>
            <button className='btn'>Facebook</button>
            <form>
                <input type="text" name="name" id="name" placeholder='Type Your Name'/>
                <br />
                <input type="email" name="email" id="email" placeholder='Type Your Email'/>
                <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password'/>
                <br />
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Your Password'/>
                <br />
                <Link to='/login'>Already have an Account?</Link>
                <br />
                <button className='register-btn'>Register</button>
            </form>
        </div>
    );
};

export default Register;