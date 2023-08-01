import React from 'react';
import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title, number, setSend, isActive, onClick }) => {
    return <div className={isActive || setSend ? 'sidebarOptions-active sidebarOptions' : 'sidebarOptions'} onClick={onClick}>
        {Icon && <Icon className='svG'></Icon>}
        <h2> {title} </h2>
        <p> {number} </p>
    </div>;
};

export default SidebarOptions;
