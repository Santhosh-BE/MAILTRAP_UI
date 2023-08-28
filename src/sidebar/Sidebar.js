import React from "react";
import "./Sidebar.css";
import { sidebarlabel } from "../Components/Constants/constants";
import { HiOutlineMail } from "react-icons/hi";
import { FaInbox, FaTrash} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = ({setSideBarChange}) => {
const navigate = useNavigate();
    return (
        <div className="  h-screen bg-stone-800 sidebarbg col-span-2" style={{ backgroundColor: "rgb(38,38,38)" }}>
            {sidebarlabel.map((label) => (
                <div
                    className={`ms-5 mt-5 me-5 text-white ${
                        label === "MailTrap" ? " ms-0 me-0 bg-blue-700 p-3 flex" : " flex p-3 hover:bg-neutral-600 w-91 rounded-md cursor:pointer"
                    }`}
                    key={label}
                    onClick={()=>navigate(label === "MailTrap" ? "/" : `/${label}`)}
                >
                    {label === "MailTrap" ? (
                        <HiOutlineMail className="me-2" size={22} />
                    ) : label === "Inbox" ? (
                        <FaInbox size={22} className="me-2" />
                    ) : (
                        <FaTrash className="me-2" />
                    )}
                    <div className="flex">
                    <NavLink to={label === "MailTrap" ? "/" : `/${label}`} activeClassName="active" onClick={()=>setSideBarChange(label)}>{label}</NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
