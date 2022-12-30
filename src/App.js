import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import MainContain from "./components/MainContain/MainContain";
import dataOfCategoryBar from "./components/CategoryBar/dataOfCategoryBar";
import "./App.css";

function App() {
   const categoryBarContain = dataOfCategoryBar.map((item) => {
      return <CategoryBar key={item.category} {...item} />;
   });

   return (
      <div className="App">
         <Header />
         <div className="full-body">
            <Sidebar />
            <div className="main-body">
               <section className="category-bar-section">{categoryBarContain}</section>
               <MainContain />
            </div>
         </div>
      </div>
   );
}

export default App;
