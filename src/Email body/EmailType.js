import React from 'react';
import './EmailType.css'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const EmailType = () => {
    return <div className='emailType'>
        <div className="emailType-options emailTypeOptions-active">
            <InboxIcon></InboxIcon>
            <p>Primary</p>
        </div>

        <div className="emailType-options">
            <PeopleIcon></PeopleIcon>
            <p>Social</p>
        </div>

        <div className="emailType-options">
            <LocalOfferIcon></LocalOfferIcon>
            <p>Promotions</p>
        </div>
    </div>;
};

export default EmailType;
