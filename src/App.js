import React, { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import Compose from "./compose/Compose";
import { Route, Routes } from "react-router-dom";
import MailOpen from "./mail open/MailOpen";
import Login from "./authentication/Login";
const App = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  console.log(isMessageOpen, "isMessageOpen");
  return (
    <>
      {localStorage.getItem("ACCESS_TOKEN") ? (
        <div className="userWrap">
          <Header setHamburgerIcon={setHamburgerIcon} hamburgerIcon={hamburgerIcon}/>
          <div className={hamburgerIcon?"app-body-icon":"app-body"}>
            <Sidebar setIsMessageOpen={setIsMessageOpen} hamburgerIcon={hamburgerIcon}/>
            <Routes>
              <Route path="/inbox" element={<EmailList />} />
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
