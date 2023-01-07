import React from "react";
import CategoryBar from "../CategoryBar/CategoryBar";
import "./YoutubeRecommendationVideo.css";
import YoutubeRecommendationVideoThumbnail from "./YoutubeRecommendationVideoThumbnail";
import YoutubeRecommendationVideoDetails from "./YoutubeRecommendationVideoDetails";

export default function YoutubeRecommendationVideo() {
   return (
      <section className="youtube-recommendation-video-section">
         <div className="youtube-recommendation-video-category-bar-section">
            <CategoryBar />
         </div>
         <div className="youtube-recommendation-video-container">
            <YoutubeRecommendationVideoThumbnail />
            <YoutubeRecommendationVideoDetails />
         </div>
         <div className="youtube-recommendation-video-container">
            <YoutubeRecommendationVideoThumbnail />
            <YoutubeRecommendationVideoDetails />
         </div>
      </section>
   );
}
