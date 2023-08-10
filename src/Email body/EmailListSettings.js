import React from 'react';
import './EmailListSettings.css'
import { useNavigate } from 'react-router-dom';

const EmailListSettings = ({ arrow ,refreshClick}) => {

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1); // Navigate back one step in history
      };
    return <div className='emailList-settings'>
        <div className="emailList-settingsLeft">
           
        </div>

        <div className="emailList-settingsRight">
            <p>0</p>

           
        </div>
    </div>;
};

export default EmailListSettings;
