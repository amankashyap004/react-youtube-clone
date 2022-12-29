import React from "react";

export default function Sidebar() {
  
   return (
      <aside className="sidebar">
         <section className="sidebar-top">
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
         <section className="sidebar-top">
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
            <div className="sidebar-contain">
               <span className="material-symbols-outlined">expand_more</span>
               <p className="sidebar-text">Show More</p>
            </div>
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-top">
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

         <section className="sidebar-top">
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
