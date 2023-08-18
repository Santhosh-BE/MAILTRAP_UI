import React from "react";
import "./Header.css";
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
   <>
   </>
  );
};

export default Header;
