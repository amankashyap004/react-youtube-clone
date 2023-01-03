import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import MainContain from "./components/MainContain/MainContain";
import YoutubeSearch from "./components/YoutubeSearch/YoutubeSearch";
import YoutubeVideoPage from "./components/YoutubeVideoPage/YoutubeVideoPage";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Header />
         <div className="full-body">
            <Sidebar />
            <div className="main-body">
               {/* <CategoryBar />
               <MainContain /> */}
               <div className="searchPage">
                  <YoutubeSearch />
               </div>
            </div>
         </div>
         {/* <section className="youtube-video-page"><YoutubeVideoPage /></section> */}
      </div>
   );
}

export default App;
