import React, { useEffect, useState } from "react";
import EmailBody from "./EmailBody";
import "./EmailList.css";
import EmailListSettings from "./EmailListSettings";
import { useGetAllEmailQuery } from "../Services/Email/EmailApi";
import { has } from "lodash";
import { queryString } from "../Components/Constants/constants";


const EmailList = () => {
  const [snackbarMessage, setSnackbarMessage] = useState();
  const userId = localStorage.getItem("userId");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const GetAllEmailList = useGetAllEmailQuery(
    queryString({ params: { id: userId } }),
    {
      skip: !userId,
    }
  );
  const refreshClick = () => {
    GetAllEmailList.refetch();
  };

  const sentRecord = false;
  useEffect(() => {
    if (GetAllEmailList?.isError) {
      setSnackbarMessage(GetAllEmailList?.error?.data?.error);
      setState({ ...state, open: true });
    }
  }, [GetAllEmailList]);
  useEffect(() => {
    GetAllEmailList.refetch();
  }, []);
  return (
    <>
    </>
  );
};

export default EmailList;
