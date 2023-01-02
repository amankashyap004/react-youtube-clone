import React from "react";

export default function YoutubeVideoPageSectionVideoDetails() {
   return (
      <section className="youtube-video-page-section-video-details-container">
         <div className="youtube-video-page-section-video-details-container-top">
            <div className="youtube-video-page-section-video-details-container-top-tag">
               <p>#tagname</p>
            </div>
            <div className="youtube-video-page-section-video-details-container-top-video-title">
               <h3>This is a video title name and possible anything</h3>
            </div>
            <section className="youtube-video-page-section-video-details-container-top-section">
               <section className="youtube-video-page-section-video-details-container-top-left-container">
                  <div className="youtube-video-page-section-video-details-container-top-channel-icon"></div>
                  <div className="youtube-video-page-section-video-details-container-top-channel-info">
                     <p className="text-para-bold">Channel Name</p>
                     <p className="text-para-small">100M subscribers</p>
                  </div>
                  <div className="youtube-video-page-section-video-details-container-top-subscribe">
                     <p className="bg-btn">Subscribe</p>
                  </div>
               </section>
               <section className="youtube-video-page-section-video-details-container-top-right-container">
                  <div className="bg-btn">
                     <span class="material-symbols-outlined icon-small margin-right">thumb_up</span>
                     <p>80K</p>
                     <div className="vertical-line"> </div>
                     <span class="material-symbols-outlined icon-small">thumb_down</span>
                  </div>
                  <div className="bg-btn">
                     <span class="material-symbols-outlined icon-small margin-right">share</span>
                     <p>Share</p>
                  </div>
                  <div className="bg-btn">
                     <span class="material-symbols-outlined icon-small margin-right">cut</span>
                     <p>Clip</p>
                  </div>
                  <div className="bg-btn">
                     <span class="material-symbols-outlined icon-small margin-right">
                        docs_add_on
                     </span>
                     <p>Save</p>
                  </div>
                  <div className="bg-btn bg-round">
                     <span class="material-symbols-outlined icon-small">more_horiz</span>
                  </div>
               </section>
            </section>
         </div>
         <div className="youtube-video-page-section-video-details-container-bottom">
            <p className="text-para-bold">8,010,809 views 25 Mar 2022</p>
            <p className="text-para">
               Explore Juneau, Alaska with us as we navigate through an Alaskan summer. We visited
               the Tracy Arm Fjord, Mendenhall Glacier, Pack Creek bears, Hoonah, and some beautiful
               Juneau icebergs. To view at 8K 60P you'll need to use Chrome.
            </p>
            <p className="youtube-video-page-show-more">Show More</p>
         </div>
      </section>
   );
}
