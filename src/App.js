import React, { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import Compose from "./compose/Compose";
import { Route, Routes } from "react-router-dom";
import MailOpen from "./mail open/MailOpen";
const App = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  return (
    <>
     
    </>
  );
};

export default App;
