import React, { useState } from 'react';
import './Compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggFalse } from '../redux store/composeSlice';
// import { db } from '../firebase/firebase'
// import firebase from 'firebase';

const Compose = ({setIsMessageopen}) => {

    // const user = useSelector((state) => state.user.user)

    const [Email, setEmail] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    // const dispatch = useDispatch()

    const closeCompose = () => {
        // dispatch(toggFalse())
        setIsMessageopen(false);
    }

    const submitInput = (e) => {
        e.preventDefault()

        if (Email === '') {
            alert('Email is required')
        }
        if (Subject === '') {
            alert('Subject is required')
        }
        if (Message === '') {
            alert('Message is required')
        }

        // db.collection('composeData').add({
        //     email: Email,
        //     sub: Subject,
        //     emailText: Message,
        //     from: user.email,
        //     fromName: user.name,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // })

        setEmail('')
        setSubject('')
        setMessage('')

        alert('Your Email is Sent!! 🚀🤟✓')

        // dispatch(toggFalse())
    }

    return <div className='compose'>
        <div className="compose-header">
            <div className="compose-headerLeft">
                <span>New Message</span>
            </div>

            <div className="compose-headerRight">
                <RemoveIcon></RemoveIcon>
                <HeightIcon></HeightIcon>
                <CloseIcon onClick={closeCompose}></CloseIcon>
            </div>
        </div>

        <form action="" onSubmit={submitInput}>
            <div className="compose-body">
                <div className="compose-bodyForm">
                    <input type="email" name="" id="" placeholder='Recipients' value={Email} onChange={(e) => { setEmail(e.target.value) }} />

                    <input type="text" placeholder='Subject' value={Subject} onChange={(e) => { setSubject(e.target.value) }} />

                    <textarea name="" id="" cols="" rows="20" value={Message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                </div>
            </div>

            <div className="compose-footer">
                <div className="compose-footerLeft">
                    <button type="submit">
                        Send <ArrowDropDownIcon></ArrowDropDownIcon>
                    </button>
                </div>

                <div className="compose-footerRight">
                    {/* <FormatColorTextIcon></FormatColorTextIcon> */}
                    <AttachFileIcon></AttachFileIcon>
                    {/* <LinkIcon></LinkIcon>
                    <InsertEmoticonIcon></InsertEmoticonIcon>
                    <NoteAddIcon></NoteAddIcon>
                    <PhotoIcon></PhotoIcon>
                    <PhonelinkLockIcon></PhonelinkLockIcon>
                    <CreateIcon></CreateIcon>
                    <MoreVertIcon></MoreVertIcon>
                    <DeleteIcon></DeleteIcon> */}
                </div>
            </div>
        </form>
    </div>;
};

export default Compose;
