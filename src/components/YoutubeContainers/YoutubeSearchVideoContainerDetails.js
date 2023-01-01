import React from "react";
import "./YoutubeSearchVideoContainerDetails.css";

export default function YoutubeSearchVideoContainerDetails(props) {
   return (
      <section className="youtube-search-video-container-details">
         <div className="youtube-search-video-container-details-left">
            <h3 className="youtube-search-video-container-details-title">
               Your video title and its your choose make anything
            </h3>
            <div className="youtube-search-video-container-details-more-details">
               <p>5.0 M views • 5 years ago</p>
            </div>
            <div className="youtube-search-video-container-details-channel-section">
               <span className="material-symbols-outlined youtube-search-video-container-details-channel-icon">
                  person
               </span>
               <p className="youtube-search-video-container-details-channel-name">Channel Name</p>
            </div>
            <div className="youtube-search-video-container-details-discretion">
               <p className="youtube-search-video-container-details-discretion-text">
                  #DieForYou Music video by The performing Die For You. © 2021 The Weeknd XO, Inc.,
                  Manufactured and ...
               </p>
            </div>
         </div>
         <div className="youtube-search-video-container-details-right">
            <span className="material-symbols-outlined">more_vert</span>
         </div>
      </section>
   );
}
