import React from "react";
import "./YoutubeSearchChannel.css";

export default function YoutubeSearchChannelContainer(props) {
   return (
      <section className="youtube-search-channel-container" key={props.keyName}>
         <div className="youtube-search-channel-container-image">
            <img
               src={props.channelImage}
               alt="yt thumbnail"
               className="youtube-search-channel-container-img"
            />
         </div>
      </section>
   );
}
