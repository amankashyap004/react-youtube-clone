import React from "react";
import "./YoutubeSearchVideoContainerDetails.css";

export default function YoutubeSearchVideoContainerDetails(props) {
   return (
      <section className="youtube-search-video-container-details">
         <div className="youtube-search-video-container-details-left">
            <h3 className="youtube-search-video-container-details-title">{props.title}</h3>
            <div className="youtube-search-video-container-details-more-details">
               <p>
                  {props.viewCount} • {props.publishedAt}
               </p>
            </div>
            <div className="youtube-search-video-container-details-channel-section">
               <span className="material-symbols-outlined youtube-search-video-container-details-channel-icon">
                  person
               </span>
               <p className="youtube-search-video-container-details-channel-name">
                  {props.channelTitle}
               </p>
            </div>
            <div className="youtube-search-video-container-details-discretion">
               <p className="youtube-search-video-container-details-discretion-text">
                  {props.description}
               </p>
            </div>
         </div>
         <div className="youtube-search-video-container-details-right">
            <span className="material-symbols-outlined">more_vert</span>
         </div>
      </section>
   );
}
