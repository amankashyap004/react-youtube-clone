import React from "react";
import dataOfCategoryBar from "./dataOfCategoryBar";
import CategoryBarSection from "./CategoryBarSection";
import "./CategoryBar.css";

export default function CategoryBar(){

    const categoryBarContain = dataOfCategoryBar.map((item) => {
        return <CategoryBarSection key={item.category} {...item} />;
     });

    return(
        <main className="category-bar-container">
            <section className="category-bar-section">{categoryBarContain}</section>

        </main>
    )
}