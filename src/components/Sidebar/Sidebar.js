import React from "react";
import SidebarContain from "./SidebarContain";
import "./Sidebar.css";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
               <SidebarContain iconName="home" titleName="Home" />
            </Link>
            <div className="sidebar-contain">
               <img
                  src="/images/youtube-shorts-icon.png"
                  className="icon youtube-shorts-icon"
                  alt="ytShorts"
               />
               <p className="sidebar-text">Shorts</p>
            </div>
            <Link to={"/video"}>
               <SidebarContain iconName="subscriptions" titleName="Subscriptions" />
            </Link>
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-section">
            <SidebarContain iconName="video_library" titleName="Library" />
            <SidebarContain iconName="history" titleName="History" />
            <SidebarContain iconName="slideshow" titleName="Your Videos" />
            <SidebarContain iconName="movie" titleName="Your Movies" />
            <SidebarContain iconName="timer" titleName="Watch Later" />

            {/* Show More Function */}
            <section className={isActive ? "sidebar-section" : "show-more"}>
               <SidebarContain iconName="thumb_up" titleName="Like" />
               <SidebarContain iconName="playlist_play" titleName="Your Playlist" />
               <SidebarContain iconName="youtube_activity" titleName="Your Activity" />
            </section>
            <div onClick={showMore}>
               <SidebarContain
                  iconName={isArrow ? "expand_less" : "expand_more"}
                  titleName={showText ? "Show Fewer" : "Show More"}
               />
            </div>
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-section">
            <p className="sidebar-text explore-text">Explore</p>
            <SidebarContain iconName="local_fire_department" titleName="Trending" />
            <SidebarContain iconName="music_note" titleName="Music" />
            <SidebarContain iconName="stadia_controller" titleName="Gaming" />
            <SidebarContain iconName="newspaper" titleName="News" />
         </section>
         <div className="sidebar-hr"></div>

         <section className="sidebar-section">
            <SidebarContain iconName="settings" titleName="Settings" />
            <SidebarContain iconName="flag" titleName="Report History" />
            <SidebarContain iconName="help" titleName="Help" />
            <SidebarContain iconName="flag" titleName="Report History" />
            <SidebarContain iconName="sms_failed" titleName="Send Feedback" />
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
