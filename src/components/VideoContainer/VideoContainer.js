import React from "react";
import "./VideoContainer.css";

export default function VideoContainer(props) {
   const [isActive, setISActive] = React.useState(false);
   const onHover = () => {
      setISActive(!isActive);
   };
   return (
      <section
         className={
            isActive
               ? "video-container-section video-container-section-hover"
               : "video-container-section"
         }
         onClick={onHover}
      >
         <div className="video-container-image">
            <img src="./images/thumbnail.jpg" alt="yt thumbnail" className="video-container-img" />
            <div className="video-container-timer">
               <p className="video-container-timer-text">28:08</p>
            </div>
         </div>
         <div
            className={
               isActive
                  ? "video-container-details video-container-details-padding"
                  : "video-container-details"
            }
         >
            <div className="video-container-details-left">
               <span className="material-symbols-outlined icon header-left-icon header-user-icon">
                  person
               </span>
            </div>
            <div className="video-container-details-right">
               <h3 className="video-container-details-title">
                  Your video title and its your choose make anything
               </h3>
               <h5 className="video-container-details-channel-name">Channel Name</h5>
               <div className="video-container-details-more-details">
                  <p>5.0 M views • 5 years ago</p>
               </div>
            </div>
            <div className=
                 {
                  isActive
               ? "video-container-details-more-icon-display"
               : "video-container-details-more-icon"
                 }
                 >
               <span className="material-symbols-outlined">more_vert</span>
            </div>
         </div>
         <section
            className={
               isActive
                  ? "video-container-more-container"
                  : "video-container-more-container display-none"
            }
         >
            <div className="video-container-more">
               <span className="material-symbols-outlined">schedule</span>
               <p className="video-container-more-text">Watch Letter</p>
            </div>
            <div className="video-container-more">
               <span className="material-symbols-outlined">playlist_add</span>
               <p className="video-container-more-text">Add to queue</p>
            </div>
         </section>
      </section>
   );
}
