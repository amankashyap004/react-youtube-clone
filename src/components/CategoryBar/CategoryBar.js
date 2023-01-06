import React from "react";
import dataOfCategoryBar from "./dataOfCategoryBar";
import "./CategoryBar.css";

export default function CategoryBar() {
   const [selected, setSelected] = React.useState("All");

   return (
      <div>
         <main className="category-bar-container">
            <section className="category-bar-section">
               {dataOfCategoryBar.map((item, i) => {
                  return (
                     <div
                        key={i}
                        className={
                           selected == item.category
                              ? "category-bar-contain-active"
                              : "category-bar-contain"
                        }
                        onClick={() => setSelected(item.category)}
                     >
                        <p className="category-bar-contain-text">{item.category}</p>
                     </div>
                  );
               })}
            </section>
         </main>
      </div>
   );
}
