import React from 'react';
import EmailListSettings from '../Email body/EmailListSettings';
import './MailOpen.css'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Avatar, IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';

const MailOpen = () => {

    const emailDetailsOnBody = useSelector((state) => state.compose.selectedMessage)

    return <div className='emailDetail'>
        <EmailListSettings arrow></EmailListSettings>

        <div className="emailDetail-Message">
            <div className="emailDetail-header">
                <div className="emailDetail-headerLeft">
                    <h4> {emailDetailsOnBody.subject} </h4>

                    <IconButton>
                        <LabelImportantIcon></LabelImportantIcon>
                    </IconButton>
                </div>

                <div className="emailDetail-headerRight">
                    <IconButton>
                        <PrintIcon></PrintIcon>
                    </IconButton>

                    <IconButton>
                        <LaunchIcon></LaunchIcon>
                    </IconButton>
                </div>
            </div>

            <div className="emailDetails-MiddleHeader">
                <div className="emailDetails-MiddleHeaderLeft">
                    <IconButton>
                        <Avatar></Avatar>
                    </IconButton>

                    <h4> {emailDetailsOnBody.name} </h4>
                    <p> {emailDetailsOnBody.email} </p>
                </div>

                <div className="emailDetails-MiddleHeaderRight">
                    <p> {emailDetailsOnBody.time} </p>

                    <IconButton>
                        <StarIcon></StarIcon>
                    </IconButton>

                    <IconButton>
                        <ReplyIcon></ReplyIcon>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>

            <div className="emailDetails-Body">
                <p> {emailDetailsOnBody.message} </p>
            </div>


            <p className='copyrightArka'>&copy; Developed by Santhosh</p>
        </div>
    </div>;
};

export default MailOpen;
