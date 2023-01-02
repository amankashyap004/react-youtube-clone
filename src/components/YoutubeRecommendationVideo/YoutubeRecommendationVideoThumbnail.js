import React from "react";

export default function YoutubeRecommendationVideoThumbnail(){
    return(
        <section className="youtube-recommendation-video-thumbnail">
        <div className="youtube-recommendation-video-thumbnail-image">
           <img src="./images/thumbnail.jpg" alt="yt thumbnail" className="youtube-recommendation-video-thumbnail-img" />
           <div className="youtube-recommendation-video-thumbnail-timer">
              <p className="youtube-recommendation-video-thumbnail-timer-text">28:08</p>
           </div>
        </div>  
     </section>
    )
}

