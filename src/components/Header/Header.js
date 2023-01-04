import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
   const [inputSearch, setInputSearch] = React.useState("");

   return (
      <header className="header">
         <section className="header-section">
            <Link to="/" className="header-container">
               <span className="material-symbols-outlined icon">menu</span>
               <div className="logo">
                  <img src="/images/youtube-icon.png" className="logo-img" alt="yt logo" />
                  <h3 className="logo-text">YouTube</h3>
               </div>
            </Link>
         </section>
         <section className="header-section">
            <div className="header-container search-bar-container">
               <div className="search-input">
                  <input
                     type="text"
                     className="input"
                     placeholder="Search"
                     onChange={(e) => setInputSearch(e.target.value)}
                     value={inputSearch}
                  />
               </div>
               <Link to={`/search/${inputSearch}`}>
                  <button className="search-btn">
                     <span className="material-symbols-outlined icon search-icon">search</span>
                  </button>
               </Link>
               <div className="mic-container">
                  <span className="material-symbols-outlined icon ">mic</span>
               </div>
            </div>
         </section>
         <section className="header-section">
            <div className="header-container">
               <span className="material-symbols-outlined icon header-left-icon">video_call</span>
               <span className="material-symbols-outlined icon header-left-icon header-notification-icon">
                  notifications
               </span>
               <span className="material-symbols-outlined icon header-left-icon header-user-icon">
                  person
               </span>
            </div>
         </section>
      </header>
   );
}
