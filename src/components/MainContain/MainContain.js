import React from "react";
import YoutubeAPI from "./YoutubeAPI";
import "./Style.css";

export default function MainContain() {
   return (
      <section className="main-container">
         <div className="main-contain">
            <YoutubeAPI />
         </div>
         {/* <div className="main-hr"></div>
         <h4 className="extra-text">Trending</h4>
         <div className="main-contain">
            <YoutubeAPI />
         </div>
         <div className="main-hr"></div>
         <div className="main-contain">
            <YoutubeAPI />
         </div> */}
      </section>
   );
}
