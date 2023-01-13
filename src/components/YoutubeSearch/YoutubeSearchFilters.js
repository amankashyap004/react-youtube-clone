import React from "react";

export default function YoutubeSearchFilters() {
   const [isFilter, setIsFilter] = React.useState(false);
   const handleClick = () => {
      setIsFilter(!isFilter);
   };
   let value = "";
   const handleClickValue = () => {
      console.log(value);
   };

   return (
      <section className="youtube-search-filters">
         <div className="youtube-search-filters-icon" onClick={handleClick}>
            <span className="material-symbols-outlined">tune</span>
            <h5 className="youtube-search-section-filters-text">Filters</h5>
         </div>
         <div className={`${isFilter ? "display-block" : "display-none"}`}>
            <section className="youtube-search-filters-more">
               <section className="youtube-search-filters-more-container">
                  <h5 className="youtube-search-filters-more-heading">UPLOAD DATE</h5>
                  <div className="youtube-search-filters-more-hr"></div>
                  <ul className="youtube-search-filters-more-ul">
                     <li className="text-para-small">Last hour</li>
                     <li className="text-para-small">Today</li>
                     <li className="text-para-small">This week</li>
                     <li className="text-para-small">This month</li>
                     <li className="text-para-small">This year</li>
                  </ul>
               </section>
               <section className="youtube-search-filters-more-container">
                  <h5 className="youtube-search-filters-more-heading">TYPE</h5>
                  <div className="youtube-search-filters-more-hr"></div>
                  <ul className="youtube-search-filters-more-ul">
                     <li className="text-para-small">Video</li>
                     <li className="text-para-small">Channel</li>
                     <li className="text-para-small">Playlist</li>
                  </ul>
               </section>
               <section className="youtube-search-filters-more-container">
                  <h5 className="youtube-search-filters-more-heading">DURATION</h5>
                  <div className="youtube-search-filters-more-hr"></div>
                  <ul className="youtube-search-filters-more-ul">
                     <li className="text-para-small">Under 4 minutes</li>
                     <li className="text-para-small">4-20 minutes</li>
                     <li className="text-para-small">Over 20 minutes</li>
                  </ul>
               </section>
            </section>
         </div>
      </section>
   );
}
