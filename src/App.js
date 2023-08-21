import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import Compose from "./compose/Compose";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Combinecomponent/index.js";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage trash={false}/>} />
                <Route path="/Inbox" element={<Homepage trash={false}/>} />
                <Route path="/Trash" element={<Homepage trash={true} />} />
            </Routes>
        </>
    );
};

export default App;
