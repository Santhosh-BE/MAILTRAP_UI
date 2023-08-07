import React from 'react';
import './EmailListSettings.css'
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const EmailListSettings = ({ arrow ,refreshClick}) => {

    const navigate = useNavigate()

    return <div className='emailList-settings'>
        <div className="emailList-settingsLeft">
            <IconButton>
                {!arrow ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <ArrowBackIcon onClick={() => { navigate('/') }}></ArrowBackIcon>}
            </IconButton>

            <IconButton>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </IconButton>

            <IconButton>
                <RefreshIcon onClick={refreshClick}></RefreshIcon>
            </IconButton>

            <IconButton>
                <MoreVertIcon></MoreVertIcon>
            </IconButton>
        </div>

        <div className="emailList-settingsRight">
            <p>0</p>

            <IconButton>
                <ChevronLeftIcon></ChevronLeftIcon>
            </IconButton>

            <IconButton>
                <ChevronRightIcon></ChevronRightIcon>
            </IconButton>
        </div>
    </div>;
};

export default EmailListSettings;
