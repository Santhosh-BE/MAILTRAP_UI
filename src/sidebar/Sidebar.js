import React, { useState } from "react";
import "./Sidebar.css";

import SidebarOptions from "./sidebar options/SidebarOptions";

const Sidebar = ({ setIsMessageOpen, hamburgerIcon }) => {
    const [SetActiveBut, setSetActiveBut] = useState(false);
    const [SetSend, setSetSend] = useState(false);
    const composeModalOpen = () => {
        setIsMessageOpen(true);
    };
    return (
        <div className="sidebar">
            <div className="sideBarIcons">
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
                {/* <SidebarOptions
          Icon={DeleteIcon}
          title={!hamburgerIcon?"Trash":""}
          number="224"
        ></SidebarOptions> */}
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
