import React from "react";

export default function YoutubeVideoPageSectionVideoDetails(props) {
   const [showMore, setShowMore] = React.useState(true);

   const showMoreFunc = () => {
      setShowMore(!showMore);
   };
   return (
      <section className="youtube-video-page-section-video-details-container">
         <div className="youtube-video-page-section-video-details-container-top">
            <div className="youtube-video-page-section-video-details-container-top-tag">
               <p>
                  #{props.tags[0].split(" ").join("")} #{props.tags[1].split(" ").join("")} #
                  {props.tags[2].split(" ").join("")}
               </p>
            </div>
            <div className="youtube-video-page-section-video-details-container-top-video-title">
               <h3>{props.title}</h3>
            </div>
            <section className="youtube-video-page-section-video-details-container-top-section">
               <section className="youtube-video-page-section-video-details-container-top-left-container">
                  <div className="youtube-video-page-section-video-details-container-top-channel-icon"></div>
                  <div className="youtube-video-page-section-video-details-container-top-channel-info">
                     <p className="text-para-bold">{props.channelTitle}</p>
                     <p className="text-para-small">100M subscribers</p>
                  </div>
                  <div className="youtube-video-page-section-video-details-container-top-subscribe">
                     <p className="bg-btn">Subscribe</p>
                  </div>
               </section>
               <section className="youtube-video-page-section-video-details-container-top-right-container">
                  <div className="bg-btn">
                     <span className="material-symbols-outlined icon-small margin-right">
                        thumb_up
                     </span>
                     <p>{props.likeCount}</p>
                     <div className="vertical-line"> </div>
                     <span className="material-symbols-outlined icon-small">thumb_down</span>
                  </div>
                  <div className="bg-btn">
                     <span className="material-symbols-outlined icon-small margin-right">
                        share
                     </span>
                     <p>Share</p>
                  </div>
                  <div className="bg-btn">
                     <span className="material-symbols-outlined icon-small margin-right">cut</span>
                     <p>Clip</p>
                  </div>
                  <div className="bg-btn">
                     <span className="material-symbols-outlined icon-small margin-right">
                        docs_add_on
                     </span>
                     <p>Save</p>
                  </div>
                  <div className="bg-btn bg-round">
                     <span className="material-symbols-outlined icon-small">more_horiz</span>
                  </div>
               </section>
            </section>
         </div>
         <div
            className={`youtube-video-page-section-video-details-container-bottom ${
               showMore ? "youtube-video-page-hover" : "youtube-video-page-hover-remove"
            }`}
         >
            <p className="text-para-bold">
               {props.viewCount} views {props.publishedAt}
            </p>
            <div className="youtube-video-page-description-section">
               <p className={`text-para ${showMore ? "display-block" : "display-none"}`}>
                  {/* {props.description.substring(0, 100)} */}
                  {props.description.split(".")[0]}.
               </p>
               <p className={`text-para ${showMore ? "display-none" : "display-block"}`}>
                  {props.description}
               </p>
            </div>
            <p className="youtube-video-page-show-more" onClick={showMoreFunc}>
               {showMore ? "Show More" : "Show Less"}
            </p>
         </div>
      </section>
   );
}
