import React from "react";

export default function Header() {
   return (
      <header className="header">
         <section className="header-section">
            <div href="./" className="header-container">
               <span className="material-symbols-outlined icon">menu</span>
               <a href="./" className="logo">
                  <img src="./images/youtube-icon.png" className="logo-img" alt="yt logo" />
                  <h3 className="logo-text">YouTube</h3>
               </a>
            </div>
         </section>
         <section className="header-section">
            <div className="header-container search-bar-container">
               <div className="search-input">
                  <input type="text" className="input" placeholder="Search" />
               </div>
               <button className="search-btn">
                  <span className="material-symbols-outlined icon search-icon">search</span>
               </button>
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
