import React, { useState } from 'react';
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import SidebarOptions from './sidebar options/SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { toggTrue } from '../redux store/composeSlice'
import { hideEmail, showEmail } from '../redux store/sentRecordSlice'

const Sidebar = () => {

    const [SetActiveBut, setSetActiveBut] = useState(false);
    const [SetSend, setSetSend] = useState(false);
    const dispatch = useDispatch()

    const openCompose = () => {
        dispatch(toggTrue())
    }

    // const hideSentEmail = () => {      Inbox
    //     dispatch(hideEmail())
    //     setSetActiveBut(true)
    //     setSetSend(false)
    // }

    // const getSentEmail = () => {       Sent
    //     dispatch(showEmail())
    //     setSetSend(true)
    //     setSetActiveBut(false)
    // }


    return <div className='sidebar'>
        <Button startIcon={<AddIcon></AddIcon>} className='composeBtn' onClick={openCompose}>Compose</Button>

        <div className="sideBarIcons">
            <SidebarOptions Icon={InboxIcon} title='Inbox' number='500' isActive={SetActiveBut} ></SidebarOptions>
            {/* <SidebarOptions Icon={StarIcon} title='Starred' number='224'></SidebarOptions> */}
            {/* <SidebarOptions Icon={WatchLaterIcon} title='Snoozed' number='254'></SidebarOptions> */}
            {/* <SidebarOptions Icon={LabelImportantIcon} title='Important' number='452'></SidebarOptions> */}
            <SidebarOptions Icon={SendIcon} title='Sent' number='224' setSend={SetSend}></SidebarOptions>
            <SidebarOptions Icon={DraftsIcon} title='Drafts' number='224'></SidebarOptions>
            {/* <SidebarOptions Icon={LabelIcon} title='Category' number='224'></SidebarOptions> */}
            <SidebarOptions Icon={DeleteIcon} title='Trash' number='224'></SidebarOptions>
            {/* <SidebarOptions Icon={FindInPageIcon} title='Documents' number='224'></SidebarOptions>
            <SidebarOptions Icon={ExpandMoreIcon} title='More' number='224'></SidebarOptions> */}
        </div>

        {/* <h3 className="sidebarHeading">Meet</h3>

        <SidebarOptions Icon={VideocamIcon} title='New Meeting'></SidebarOptions>
        <SidebarOptions Icon={KeyboardIcon} title='Join a meeting'></SidebarOptions> */}
    </div>;
};

export default Sidebar;
