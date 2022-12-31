import React from "react";
import VideoContainer from "../VideoContainer/VideoContainer";
import YoutubeAPI from "../VideoContainer/YoutubeAPI";
import "./MainContain.css"

export default function MainContain() {
   return (
      <section className="main-container">
         <div className="main-contain">
                 <YoutubeAPI/>
            
         </div>
         <div className="main-hr"></div>
         <h4 className="extra-text">Trending</h4>
         <div className="main-contain">
            
         </div>
         <div className="main-hr"></div>
         <div className="main-contain">
         
         <VideoContainer />
         </div>
      </section>
   );
}
