import { useState } from "react";
import EmailBody from "../Email body/EmailBody"
import EmailList from "../Email body/EmailList"
import Sidebar from "../sidebar/Sidebar"

export const Homepage=(trash)=>{
    const [id,setId]=useState();
    return (
        <div className="grid grid-cols-12">
        <Sidebar />
        <EmailList setId={setId} trash={trash}/>
        <EmailBody id={id}  trash={trash}/>
    </div>
    )
}