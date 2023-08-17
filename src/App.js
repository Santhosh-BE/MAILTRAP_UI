import React, { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import Compose from "./compose/Compose";
import { Route, Routes } from "react-router-dom";
import MailOpen from "./mail open/MailOpen";
import EmailBody from "./Email body/EmailBody";
const App = () => {
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [hamburgerIcon, setHamburgerIcon] = useState(false);
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <EmailList />
                <EmailBody />
            </div>
        </>
    );
};

export default App;
