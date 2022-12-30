import React from "react";
import CategoryBarCss from "./CategoryBarCss.css"

export default function CategoryBar(props) {

   const [isActive, setISActive] = React.useState(true);
   const ToggleClass = () => {
      setISActive(!isActive);
   };
   

   const categoryBarContain = [
      <div
         className={isActive ? "category-bar-contain" : "category-bar-contain-active"}
         onClick={ToggleClass}
         key={props.category}
      >
         <p className="category-bar-contain-text">{props.category}</p>
      </div>,
   ];

   return <section className="category-bar">{categoryBarContain}</section>;
}
