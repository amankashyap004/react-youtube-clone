import React from "react";

const uploadDateFilters = ["last hour", "Today", "This week", "This month", "This year"];
const typeFilters = ["video", "channel", "playlist"];
const durationFilters = ["Under 4 minutes", "4-20 minutes", "Over 20 minutes"];

export default function YoutubeSearchFilters() {
   const [isFilter, setIsFilter] = React.useState(false);
   const handleClick = () => {
      setIsFilter(!isFilter);
   };
   const [isValue, setIsValue] = React.useState("");
   const handleClickValue = (val) => {
      console.log(val);
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
                     {uploadDateFilters.map((uploadDateFilter, id) => (
                        <li
                           key={id}
                           className="text-para-small"
                           onClick={() => handleClickValue(uploadDateFilter)}
                        >
                           {uploadDateFilter}
                        </li>
                     ))}
                  </ul>
               </section>
               <section className="youtube-search-filters-more-container">
                  <h5 className="youtube-search-filters-more-heading">TYPE</h5>
                  <div className="youtube-search-filters-more-hr"></div>
                  <ul className="youtube-search-filters-more-ul">
                     {typeFilters.map((typeFilter, id) => (
                        <li
                           key={id}
                           className="text-para-small"
                           onClick={() => handleClickValue(typeFilter)}
                        >
                           {typeFilter}
                        </li>
                     ))}
                  </ul>
               </section>
               <section className="youtube-search-filters-more-container">
                  <h5 className="youtube-search-filters-more-heading">DURATION</h5>
                  <div className="youtube-search-filters-more-hr"></div>
                  <ul className="youtube-search-filters-more-ul">
                     {durationFilters.map((durationFilter, id) => (
                        <li
                           key={id}
                           className="text-para-small"
                           onClick={() => handleClickValue(durationFilter)}
                        >
                           {durationFilter}
                        </li>
                     ))}
                  </ul>
               </section>
            </section>
         </div>
      </section>
   );
}
