import React from "react";
import YoutubeSearchVideoContain from "./YoutubeSearchVideoContain"
import "./YoutubeSearch.css";

export default function YoutubeSearch() {
   return (
      <section className="YoutubeSearchSection">
         <div className="youtube-search-section-filters" >
            <span className="material-symbols-outlined">tune</span>
            <h5 className="youtube-search-section-filters-text">Filters</h5>
         </div>
         <div className="main-hr margin-top-zero"></div>
         <section className="youtube-search-videos">
            <YoutubeSearchVideoContain />
         </section>      
      </section>
   );
}
