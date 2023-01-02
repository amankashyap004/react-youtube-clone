import React from "react";
import "./YoutubeVideoPage.css";
import YoutubeRecommendationVideo from "../YoutubeRecommendationVideo/YoutubeRecommendationVideo";

export default function YoutubeVideoPage() {
   return (
      <section className="youtube-video-page-section">
         <div className="youtube-video-page-section-video-section">
            <video controls className="youtube-video-page-section-video"></video>
         </div>
         <div className="youtube-video-page-section-recommendation">
            <YoutubeRecommendationVideo/>
         </div>
      </section>
   );
}
