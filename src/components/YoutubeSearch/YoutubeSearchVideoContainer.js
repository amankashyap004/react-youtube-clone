import React from "react";
import "./YoutubeSearchVideoContainer.css";

export default function YoutubeSearchVideoContainer(props) {
   return (
      <section className="youtube-search-video-container" key={props.keyName}>
         <div className="youtube-search-video-container-image">
            <img
               src={props.image}
               alt="yt thumbnail"
               className="youtube-search-video-container-img"
            />
            <div className="youtube-search-video-container-timer">
               <p className="youtube-search-video-container-timer-text">28:08</p>
            </div>
         </div>
      </section>
   );
}
