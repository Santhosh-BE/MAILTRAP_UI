import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "./App.css";
import EmailList from "./Email body/EmailList";
import EmailBody from "./Email body/EmailBody";
const App = () => {
    const [id,setId]=useState();
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
