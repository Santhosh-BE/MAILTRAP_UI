import React from "react";
import "./Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "react-router-dom";
import { useGetSearchApiQuery } from "../Services/Email/EmailApi";
import { queryString } from "../Components/Constants/constants";
import { useEffect } from "react";
import { has } from "lodash";

const Header = ({
  setHamburgerIcon,
  hamburgerIcon,
  setEmailListData,
  emailListData,
}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchValue, setSearchvalue] = React.useState();
  const open = Boolean(anchorEl);
  const userId = localStorage.getItem("userId");
  const GetSearchApi = useGetSearchApiQuery(
    queryString({ params: { userid: userId, title: searchValue } }),
    
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (
      GetSearchApi?.isSuccess &&
      has(GetSearchApi, "data") &&
      GetSearchApi?.data?.res
    ) {
      setEmailListData(GetSearchApi?.data?.res);
    }
  }, [GetSearchApi]);
  const logOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("Email");
    navigate("/");
    window.location.reload();
  };
  const handleSearch = (e) => {
    setSearchvalue(e.target.value);
  };
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <ReorderIcon
            onClick={() => setHamburgerIcon(!hamburgerIcon)}
          ></ReorderIcon>
        </IconButton>
      </div>

      <div className="header-middle">
        <div className="search-mail">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>

          <input
            type="text"
            placeholder="Search Mail"
            value={searchValue}
            onChange={handleSearch}
          />

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
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem> */}
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
