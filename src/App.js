import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryBar from "./components/CategoryBar";
import MainContain from "./components/MainContain";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <div className="full-body">
            <Sidebar />
            <div className="main-body">
               <CategoryBar />
               <MainContain />
            </div>
         </div>
      </div>
   );
}

export default App;
