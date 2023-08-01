import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase/firebase';
import EmailBody from './EmailBody';
import './EmailList.css'
import EmailListSettings from './EmailListSettings';
import EmailType from './EmailType';

const EmailList = () => {
const Emails =[{
    id:1,
    from: 'santhoshKaliyannan@gmail.com',
    fromName: 'Santhosh Kaliyannan',
    emailText: 'Test email',
    sub: 'Create a sample email UI in react js',
}]
const sentRecord = false;
    // const [Emails, setEmails] = useState([]);
    // const user = useSelector((state) => state.user.user)
    // const sentRecord = useSelector((state) => state.sentRecord.value)

    // useEffect(() => {
    //     db.collection('composeData').orderBy('timestamp', 'desc').onSnapshot((collection) => {
    //         setEmails(collection.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     })
    // }, [])

    return <div className='emailList'>
        <EmailListSettings></EmailListSettings>
        <EmailType></EmailType>

        {
            Emails?.map((data) => {
                return (
                    <> {
                        // data.email === user.email && 
                    sentRecord === false && (<EmailBody key={data.id} email={data.from} name={data.fromName} message={data.emailText} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} subject={data.sub}></EmailBody>)}

                        {/* {
                            sentRecord === true && data.email !== user.email && (<EmailBody key={id} email={data.from} name={data.fromName} message={data.emailText} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} subject={data.sub}></EmailBody>)
                        } */}
                    </>
                )
            })
        }
    </div>;
};

export default EmailList;
