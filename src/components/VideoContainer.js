import React from "react";

export default function VideoContainer() {
   return (
      <section className="video-container-section">
         <div className="video-container-image">
            <img src="./images/thumbnail.jpg" alt="yt thumbnail" className="video-container-img" />
         </div>
         <div className="video-container-details">
            <div className="video-container-details-left">
               <span className="material-symbols-outlined icon header-left-icon header-user-icon">
                  person
               </span>
            </div>
            <div className="video-container-details-right">
                <h3 className="video-container-details-title">Your video title and its your choose make anything</h3>
                <h5 className="video-container-details-channel-name">Channel Name</h5>
                <div className="video-container-details-more-details">
                   <p>5.0 M views • 5 years ago</p>
                </div>
            </div>
         </div>
      </section>
   );
}
