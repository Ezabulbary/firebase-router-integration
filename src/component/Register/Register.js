import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Registers.css';

const Register = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className='registers'>
            <h1>Please Register</h1>
            <button className='btn'>Github</button>
            <button onClick={signInWithGoogle} className='btn'>Google</button>
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
                <button className='register-btn'>Register</button>
            </form>
        </div>
    );
};

export default Register;