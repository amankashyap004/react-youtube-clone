import React, { Children } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import MainContain from "./components/MainContain/MainContain";
import YoutubeSearch from "./components/YoutubeSearch/YoutubeSearch";
import YoutubeVideoPage from "./components/YoutubeVideoPage/YoutubeVideoPage";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      // <div className="App">
      //    <Header />
      //    <div className="full-body">
      //       <Sidebar />
      //       <div className="main-body">
      //          <CategoryBar />
      //          <MainContain />
      //          <div className="searchPage">
      //             <YoutubeSearch />
      //          </div>
      //       </div>
      //    </div>
      //    <section className="youtube-video-page"><YoutubeVideoPage /></section>
      // </div>

      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <div className="App">
                     <Header />
                     <div className="full-body">
                        <Sidebar />,
                        <div className="main-body">
                           <CategoryBar />
                           <MainContain />
                        </div>
                     </div>
                  </div>
               }
            />
            <Route
               path={`/search/:searchQuery`}
               element={
                  <div className="App">
                     <Header />
                     <div className="full-body">
                        <Sidebar />,
                        <div className="search-page">
                           <YoutubeSearch />
                        </div>
                     </div>
                  </div>
               }
            />
            <Route
               path="/video"
               element={
                  <div className="App">
                     <Header />
                     <section className="youtube-video-page">
                        <YoutubeVideoPage />
                     </section>
                  </div>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
