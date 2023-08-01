import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase/firebase';
import './Login.css'
import { login } from '../redux store/userSlice'

const Login = () => {

    const dispatch = useDispatch()

    const runLogin = (e) => {
        e.preventDefault()

        auth.signInWithPopup(provider).then((userAuth) => {
            dispatch(login({
                name: userAuth.user.displayName,
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: userAuth.user.photoURL
            }))
        }).catch((error) => {
            alert(error)
        })
    }

    return <div className='loginWrapper'>
        <div className="login">
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt="" />

            <button className="gmail-login" onClick={runLogin}>Login with Gmail</button>
        </div>
    </div>;
};

export default Login;
