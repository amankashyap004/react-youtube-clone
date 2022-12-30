import React from "react";
import "./Sidebar.css";

export default function SidebarContain(props) {
   return (
      <div className="sidebar-contain">
         <span className="material-symbols-outlined icon">{props.iconName}</span>
         <p className="sidebar-text">{props.titleName}</p>
      </div>
   );
}
