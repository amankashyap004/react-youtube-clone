import React from "react";
import "./YoutubeSearch.css";

export default function YoutubeSearchChannelContain({ channelResult }) {
   return (
      <div className="youtube-search-Channel-section">
         <section className="youtube-search-channel-container">
            <div className="youtube-search-channel-container-image">
               <img
                  src={channelResult.snippet.thumbnails.high.url}
                  alt="yt thumbnail"
                  className="youtube-search-channel-container-img"
               />
            </div>
         </section>
         <section className="youtube-search-channel-container-details">
            <div className="youtube-search-channel-container-details-left">
               <div className="youtube-search-channel-container-details-channel-section">
                  <p className="youtube-search-channel-container-details-channel-name">
                     {channelResult.snippet.channelTitle}
                  </p>
               </div>
               <div className="youtube-search-channel-container-details-more-details">
                  <p className="text-para-small">@{channelResult.snippet.channelTitle}</p>
                  <p className="text-para-small">&nbsp;•&nbsp;</p>
                  <p className="text-para-small">{"28M"} subscribers</p>
               </div>
               <div className="youtube-search-channel-container-details-discretion">
                  <p className="youtube-search-channel-container-details-discretion-text">
                     {channelResult.snippet.description}
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
}
