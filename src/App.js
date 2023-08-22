import React from "react";
import "./App.css";
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
