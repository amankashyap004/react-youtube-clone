import React from "react";

export default function YoutubeRecommendationVideoDetails(){
    return(
        <section className="youtube-recommendation-video-details">
        <div className="youtube-recommendation-video-details-left">
           <h3 className="youtube-recommendation-video-details-title">
              Your video title and its your choose make anything
           </h3>
           <div className="youtube-recommendation-video-details-channel-section">
              <p className="youtube-recommendation-video-details-channel-name">Channel Name</p>
           </div>
           <div className="youtube-recommendation-video-details-more-details">
              <p>5.0 M views • 5 years ago</p>
           </div>
        </div>
        <div className="youtube-recommendation-video-details-right">
           <span className="material-symbols-outlined">more_vert</span>
        </div>
     </section>
    )
}