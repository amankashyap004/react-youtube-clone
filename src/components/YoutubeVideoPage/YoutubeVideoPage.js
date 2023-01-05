import React from "react";
import "./YoutubeVideoPage.css";
import YoutubeVideoPageVideoContain from "./YoutubeVideoPageVideoContain";
import YoutubeRecommendationVideo from "../YoutubeRecommendationVideo/YoutubeRecommendationVideo";
import YoutubeVideoPageSectionVideoDetails from "./YoutubeVideoPageSectionVideoDetails";

export default function YoutubeVideoPage() {
   return (
      <section className="youtube-video-page-section">
         <section className="youtube-video-page-section-video-container">
            <div className="youtube-video-page-section-video-section">
               <YoutubeVideoPageVideoContain />
            </div>
            <div className="youtube-video-page-section-video-details">
               <YoutubeVideoPageSectionVideoDetails />
            </div>
         </section>
         <div className="youtube-video-page-section-recommendation">
            <YoutubeRecommendationVideo />
         </div>
      </section>
   );
}
