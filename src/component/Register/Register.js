import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Registers.css';

const Register = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className='registers'>
            <h1>Please Register</h1>
            <button onClick={signInWithGoogle} className='google-btn'>Google Signup</button>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Type Your Name'/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Type Your Email'/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Type Your Password'/>
                <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;