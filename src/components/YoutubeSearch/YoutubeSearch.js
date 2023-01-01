import React from "react";
import YoutubeSearchVideoContainer from "../YoutubeContainers/YoutubeSearchVideoContainer";
import YoutubeSearchVideoContainerDetails from "../YoutubeContainers/YoutubeSearchVideoContainerDetails";
import "./YoutubeSearch.css";

export default function YoutubeSearch() {
   return (
      <section className="YoutubeSearchSection">
         <div className="youtube-search-section-filters" >
            <span className="material-symbols-outlined">tune</span>
            <h5 className="youtube-search-section-filters-text">Filters</h5>
         </div>
         <div className="main-hr margin-top-zero"></div>
         <section className="youtube-search-video-section">
            <YoutubeSearchVideoContainer />
            <YoutubeSearchVideoContainerDetails />
         </section>
         <section className="youtube-search-video-section">
            <YoutubeSearchVideoContainer />
            <YoutubeSearchVideoContainerDetails />
         </section>
         <section className="youtube-search-video-section">
            <YoutubeSearchVideoContainer />
            <YoutubeSearchVideoContainerDetails />
         </section>
         <section className="youtube-search-video-section">
            <YoutubeSearchVideoContainer />
            <YoutubeSearchVideoContainerDetails />
         </section>
         <section className="youtube-search-video-section">
            <YoutubeSearchVideoContainer />
            <YoutubeSearchVideoContainerDetails />
         </section>
         <section className="youtube-search-video-section">
            <YoutubeSearchVideoContainer />
            <YoutubeSearchVideoContainerDetails />
         </section>
      </section>
   );
}
