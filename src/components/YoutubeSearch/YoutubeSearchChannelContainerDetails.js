import React from "react";
import "./YoutubeSearchChannel.css";

export default function YoutubeSearchChannelContainerDetails(props) {
   return (
      <section className="youtube-search-channel-container-details">
         <div className="youtube-search-channel-container-details-left">
            <div className="youtube-search-channel-container-details-channel-section">
               <p className="youtube-search-channel-container-details-channel-name">
                  {props.channelChannelTitle}
               </p>
            </div>
            <div className="youtube-search-channel-container-details-more-details">
               <p className="text-para-small">@{props.channelChannelTitle}</p>
               <p className="text-para-small">&nbsp;•&nbsp;</p>
               <p className="text-para-small">{"28M"} subscribers</p>
            </div>
            <div className="youtube-search-channel-container-details-discretion">
               <p className="youtube-search-channel-container-details-discretion-text">
                  {props.channelDescription}
               </p>
            </div>
         </div>
      </section>
   );
}
