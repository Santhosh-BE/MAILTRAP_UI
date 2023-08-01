import React, { useEffect } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './App.css'
import EmailList from './Email body/EmailList';
import Compose from './compose/Compose';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MailOpen from './mail open/MailOpen';
import Login from './authentication/Login';
import { auth } from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux store/userSlice';

const App = () => {

    const isMessageOpen = useSelector((state) => state.compose.value)
    // const user = useSelector((state) => state.user.user)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     auth.onAuthStateChanged((userAuth) => {
    //         if (userAuth) {
    //             dispatch(login({
    //                 name: userAuth.displayName,
    //                 email: userAuth.email,
    //                 photoURL: userAuth.photoURL
    //             }))
    //         } else {
    //             dispatch(logout())
    //         }
    //     })
    // }, [dispatch])

    return <div>
        {
            // user ? 
            (<div className="userWrap">
                <Header></Header>

                <div className="app-body">
                    <Sidebar></Sidebar>

                    <Routes>
                        <Route path='/' element={<EmailList></EmailList>}></Route>
                        <Route path='/mailbox' element={<MailOpen></MailOpen>}></Route>
                    </Routes>

                </div>

                {
                    isMessageOpen && <Compose></Compose>
                }
            </div>) 
            // : (<Login></Login>)
        }
    </div>;
};

export default App;
