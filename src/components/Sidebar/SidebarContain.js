import React from "react";
import "./Sidebar.css";

export default function SidebarContain(props) {
   const [selected, setSelected] = React.useState(false);
   const selectFunc = () => {
      setSelected(!selected);
   };

   return (
      <div className={selected?"sidebar-contain sidebar-contain-selected":"sidebar-contain"} onClick={selectFunc}>
         <span className="material-symbols-outlined icon">{props.iconName}</span>
         <p className="sidebar-text">{props.titleName}</p>
      </div>
   );
}
