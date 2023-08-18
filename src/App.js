import React, { useEffect, useState } from "react";
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
    const [id,setId]=useState();
    console.log(id," setId(id);")
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <EmailList setId={setId}/>
                <EmailBody id={id}/>
            </div>
        </>
    );

};

export default App;
