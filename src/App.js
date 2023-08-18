import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import Compose from "./compose/Compose";
import { Route, Routes } from "react-router-dom";
import MailOpen from "./mail open/MailOpen";
import Login from "./authentication/Login";
import { useGetAllDeleteEmailQuery, useGetAllEmailQuery } from "./Services/Email/EmailApi";
import { has } from "lodash";
const App = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  const [emailListData, setEmailListData] = useState();
  const [deleteEmailListData, setDeleteEmailListData] = useState();
  const [snackbarMessage, setSnackbarMessage] = useState();
  const userId = localStorage.getItem("userId");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const GetAllEmailList = useGetAllEmailQuery();
  const GetAllDeleteEmailList = useGetAllDeleteEmailQuery();
  const refreshClick = () => {
    GetAllEmailList.refetch();
  };

  const sentRecord = false;
  useEffect(() => {
    if (
      GetAllEmailList?.isSuccess &&
      has(GetAllEmailList, "data") &&
      GetAllEmailList?.data
    ) {
      setEmailListData(GetAllEmailList?.data);
    }
    if (GetAllEmailList?.isError) {
      setSnackbarMessage(GetAllEmailList?.error?.data?.error);
      setState({ ...state, open: true });
    }
  }, [GetAllEmailList]);
  useEffect(() => {
    if (
      GetAllDeleteEmailList?.isSuccess &&
      has(GetAllDeleteEmailList, "data") &&
      GetAllDeleteEmailList?.data
    ) {
      setDeleteEmailListData(GetAllDeleteEmailList?.data);
    }
    if (GetAllDeleteEmailList?.isError) {
      setSnackbarMessage(GetAllDeleteEmailList?.error?.data?.error);
      setState({ ...state, open: true });
    }
  }, [GetAllDeleteEmailList]);
  useEffect(() => {
    GetAllEmailList.refetch();
  }, []);
  return (
    <>
      {localStorage.getItem("ACCESS_TOKEN") ? (
        <div className="userWrap">
          <Header setHamburgerIcon={setHamburgerIcon} hamburgerIcon={hamburgerIcon} setEmailListData={setEmailListData} emailListData={emailListData} />
          <div className={hamburgerIcon?"app-body-icon":"app-body"}>
            <Sidebar setIsMessageOpen={setIsMessageOpen} hamburgerIcon={hamburgerIcon} emailListData={emailListData} deleteEmailListData={deleteEmailListData}/>
            <Routes>
              <Route path="/inbox" element={<EmailList setEmailListData={setEmailListData} emailListData={emailListData}  refreshClick={refreshClick} snackbarMessage={snackbarMessage} state={state} setState={setState}/>} />
              <Route path="/delete" element={<EmailList setEmailListData={setEmailListData} emailListData={deleteEmailListData} />} />
              <Route path="/mailbox/:messageId" element={<MailOpen />} />
            </Routes>
          {isMessageOpen && <Compose setIsMessageOpen={setIsMessageOpen} />}
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>

        </div>
      )}
    </>
  );
};

export default App;
