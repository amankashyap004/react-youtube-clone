import React from "react";
import SidebarCss from "./SidebarCss.css";

export default function Sidebar(props) {
   const [isActive, setISActive] = React.useState(false);
   const [isArrow, setIsArrow] = React.useState(false);
   const [showText, setShowText] = React.useState(false);
   const showMore = () => {
      setISActive(!isActive);
      setIsArrow(!isArrow);
      setShowText(!showText);
   };

   return (
      <aside className="sidebar">
         <section className="sidebar-section">
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">home</span>
               <p className="sidebar-text">Home</p>
            </div>
            <div className="sidebar-contain">
               <img
                  src="./images/youtube-shorts-icon.png"
                  className="icon youtube-shorts-icon"
                  alt="yt shorts"
               />
               <p className="sidebar-text">Shorts</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">subscriptions</span>
               <p className="sidebar-text">Subscriptions</p>
            </div>
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-section">
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">video_library</span>
               <p className="sidebar-text">Library</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">history</span>
               <p className="sidebar-text">History</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined">slideshow</span>
               <p className="sidebar-text">Your Videos</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined">movie</span>
               <p className="sidebar-text">Your Movies</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined">timer</span>
               <p className="sidebar-text">Watch Later</p>
            </div>
            {/* Show More Function */}
            <section className={isActive ? "sidebar-section" : "show-more"}>
               <div className="sidebar-contain">
                  <span className="material-symbols-outlined icon">thumb_up</span>
                  <p className="sidebar-text">Like</p>
               </div>
               <div className="sidebar-contain">
                  <span className="material-symbols-outlined icon">playlist_play</span>
                  <p className="sidebar-text">Your Playlist</p>
               </div>
               <div className="sidebar-contain">
                  <span className="material-symbols-outlined">youtube_activity</span>
                  <p className="sidebar-text">Your Activity</p>
               </div>
            </section>
            <div className="sidebar-contain" onClick={showMore}>
               <span className="material-symbols-outlined">
                  {isArrow ? "expand_less" : "expand_more"}
               </span>
               <p className="sidebar-text">{showText ? "Show Fewer" : "Show More"}</p>
            </div>
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-section">
            <p className="sidebar-text explore-text">Explore</p>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">local_fire_department</span>
               <p className="sidebar-text">Trending</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">music_note</span>
               <p className="sidebar-text">Music</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">stadia_controller</span>
               <p className="sidebar-text">Gaming</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">newspaper</span>
               <p className="sidebar-text">News</p>
            </div>
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-section">
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">settings</span>
               <p className="sidebar-text">Settings</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">flag</span>
               <p className="sidebar-text">Report History</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined icon">help</span>
               <p className="sidebar-text">Help</p>
            </div>
            <div className="sidebar-contain">
               <span className="material-symbols-outlined">sms_failed</span>
               <p className="sidebar-text">Send Feedback</p>
            </div>
         </section>
         <div className="sidebar-hr"></div>

         <section className="copyright-section">
            <p className="copyright-para">
               About Press Copyright Contact us Creator Advertise Developers
            </p>
            <p className="copyright-para">
               Terms Privacy Policy & Safety How YouTube worksTest new features
            </p>
            <p className="copyright-text">© 2022 Google LLC</p>
         </section>
      </aside>
   );
}
