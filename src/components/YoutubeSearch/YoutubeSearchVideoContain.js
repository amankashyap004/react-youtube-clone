import React from "react";
import moment from "moment";
import "./YoutubeSearch.css";
import { Link } from "react-router-dom";

export default function YoutubeSearchVideoContain({ videoResult }) {
   return (
      <div className="youtube-search-video-section">
         <Link key={videoResult.id} to={`/video/${videoResult.id.videoId}`}>
            <section className="youtube-search-video-container">
               <div className="youtube-search-video-container-image">
                  <img
                     src={videoResult.snippet.thumbnails.high.url}
                     alt="yt thumbnail"
                     className="youtube-search-video-container-img"
                  />
                  <div className="youtube-search-video-container-timer">
                     <p className="youtube-search-video-container-timer-text">
                        {moment
                           .utc(moment.duration("PT10M45S").asSeconds() * 1000)
                           .format("HH:mm:ss")}
                     </p>
                  </div>
               </div>
            </section>
         </Link>
         <section className="youtube-search-video-container-details">
            <div className="youtube-search-video-container-details-left">
               <h3 className="youtube-search-video-container-details-title">
                  {videoResult.snippet.title}
               </h3>
               <div className="youtube-search-video-container-details-more-details">
                  <p>
                     {"200299"} •{" "}
                     {moment(`${videoResult.snippet.publishedAt}`, "YYYYMMDD").fromNow()}
                  </p>
               </div>
               <div className="youtube-search-video-container-details-channel-section">
                  {/* <span className="material-symbols-outlined youtube-search-video-container-details-channel-icon">
                     person
                  </span> */}
                  <span className="youtube-search-video-container-details-channel-icon">
                     <img src={videoResult.channelImage.high.url} alt="yt-channel-logo" />
                  </span>
                  <p className="youtube-search-video-container-details-channel-name">
                     {videoResult.snippet.channelTitle}
                  </p>
               </div>
               <div className="youtube-search-video-container-details-discretion">
                  <p className="youtube-search-video-container-details-discretion-text">
                     {videoResult.snippet.description}
                  </p>
               </div>
            </div>
            <div className="youtube-search-video-container-details-right">
               <span className="material-symbols-outlined">more_vert</span>
            </div>
         </section>
      </div>
   );
}
