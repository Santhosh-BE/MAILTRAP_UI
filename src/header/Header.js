import React from "react";
import "./Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const user = useSelector((state) => state.user.user)

  const logOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("Email");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <ReorderIcon></ReorderIcon>
        </IconButton>
        {/* <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt="" /> */}
      </div>

      <div className="header-middle">
        <div className="search-mail">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>

          <input type="text" placeholder="Search Mail" />

          <IconButton>
            <ExpandMoreIcon></ExpandMoreIcon>
          </IconButton>
        </div>
      </div>

      <div className="header-right" style={{ justifyContent: "end" }}>
        {/* <IconButton>
                <HelpOutlinedIcon></HelpOutlinedIcon>
            </IconButton>

            <IconButton>
                <SettingsIcon></SettingsIcon>
            </IconButton>

            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton> */}

        <Avatar src={""} onClick={handleClick}></Avatar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
