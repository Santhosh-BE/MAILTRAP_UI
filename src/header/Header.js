import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({setHamburgerIcon,hamburgerIcon}) => {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("Email");
    navigate("/");
    window.location.reload();
  };

  return (
   <>
   </>
  );
};

export default Header;
