import React, { useState } from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import SidebarOptions from "./sidebar options/SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
// import StarIcon from '@mui/icons-material/Star';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
// import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import VideocamIcon from '@mui/icons-material/Videocam';
// import KeyboardIcon from '@mui/icons-material/Keyboard';

const Sidebar = ({setIsMessageOpen , hamburgerIcon,deleteEmailListData,emailListData}) => {
  const [activeBut, setActiveBut] = useState("inbox");
  const [SetSend, setSetSend] = useState(false);
  const navigate = useNavigate();
const composeModalOpen =()=>{
  setIsMessageOpen(true);
}
const handleInbox = ()=>{
  navigate("/inbox")
  setActiveBut("inbox")
}
const handleDelete = ()=>{
  navigate("/delete")
  setActiveBut("delete")
}
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon></AddIcon>}
        className={!hamburgerIcon?"composeBtn":"composeBtnIcon"}
        onClick={composeModalOpen}
      >
        {!hamburgerIcon?"Compose":""}
      </Button>

      <div className="sideBarIcons">
        <SidebarOptions
          Icon={InboxIcon}
          title={!hamburgerIcon?"Inbox":""}
          number={emailListData?.length}
          isActive={activeBut ==="inbox"? true:false}
          onClick={handleInbox}
        ></SidebarOptions>
        {/* <SidebarOptions Icon={StarIcon} title='Starred' number='224'></SidebarOptions> */}
        {/* <SidebarOptions Icon={WatchLaterIcon} title='Snoozed' number='254'></SidebarOptions> */}
        {/* <SidebarOptions Icon={LabelImportantIcon} title='Important' number='452'></SidebarOptions> */}
        {/* <SidebarOptions
          Icon={SendIcon}
          title="Sent"
          number="224"
          setSend={SetSend}
        ></SidebarOptions>
        <SidebarOptions
          Icon={DraftsIcon}
          title="Drafts"
          number="224"
        ></SidebarOptions> */}
        {/* <SidebarOptions Icon={LabelIcon} title='Category' number='224'></SidebarOptions> */}
        <SidebarOptions
          Icon={DeleteIcon}
          title={!hamburgerIcon?"Trash":""}
          number={deleteEmailListData?.length}
          isActive={activeBut ==="delete"? true:false}
          onClick={handleDelete}
        ></SidebarOptions>
        {/* <SidebarOptions Icon={FindInPageIcon} title='Documents' number='224'></SidebarOptions>
            <SidebarOptions Icon={ExpandMoreIcon} title='More' number='224'></SidebarOptions> */}
      </div>

      {/* <h3 className="sidebarHeading">Meet</h3>

        <SidebarOptions Icon={VideocamIcon} title='New Meeting'></SidebarOptions>
        <SidebarOptions Icon={KeyboardIcon} title='Join a meeting'></SidebarOptions> */}
    </div>
  );
};

export default Sidebar;
