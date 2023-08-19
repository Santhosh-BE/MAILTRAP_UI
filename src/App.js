import React, { useEffect, useState } from "react";
import Header from "./header/Header";
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
                <Route path="/" element={<Homepage />} />
                <Route path="/trash" element={<Homepage trash={true} />} />
            </Routes>
        </>
    );
};

export default App;
