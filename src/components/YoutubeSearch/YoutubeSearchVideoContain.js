import React from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import "./YoutubeSearch.css";

export default function YoutubeSearchVideoContain() {
   let { searchQuery } = useParams();

   let youtubeAPIKey = "AIzaSyDJYaKEW09xd_Lv-aaIW3KWD7BChl1-H2w";
   let videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet&q=${searchQuery}&type=video&safeSearch=none&maxResults=8`;
   const [apiAllData, setApiAllData] = React.useState([]);

   React.useEffect(() => {
      fetch(fetchUrl)
         .then((res) => res.json())
         .then((data) => {
            const result = data.items?.map((item) => ({
               ...item,
            }));
            setApiAllData(result);
         })
         .catch((err) => console.log(err));
   }, [searchQuery]);
   return (
      <div>
         {apiAllData?.map((item, i) => {
            return (
               <div className="youtube-search-video-section" key={i}>
                  <section className="youtube-search-video-container">
                     <div className="youtube-search-video-container-image">
                        <img
                           src={item.snippet.thumbnails.high.url}
                           alt="yt thumbnail"
                           className="youtube-search-video-container-img"
                        />
                        <div className="youtube-search-video-container-timer">
                           <p className="youtube-search-video-container-timer-text">28:08</p>
                        </div>
                     </div>
                  </section>
                  <section className="youtube-search-video-container-details">
                     <div className="youtube-search-video-container-details-left">
                        <h3 className="youtube-search-video-container-details-title">
                           {item.snippet.title}
                        </h3>
                        <div className="youtube-search-video-container-details-more-details">
                           <p>
                              {"200299"} •{" "}
                              {moment(`${item.snippet.publishedAt}`, "YYYYMMDD").fromNow()}
                           </p>
                        </div>
                        <div className="youtube-search-video-container-details-channel-section">
                           <span className="material-symbols-outlined youtube-search-video-container-details-channel-icon">
                              person
                           </span>
                           <p className="youtube-search-video-container-details-channel-name">
                              {item.snippet.channelTitle}
                           </p>
                        </div>
                        <div className="youtube-search-video-container-details-discretion">
                           <p className="youtube-search-video-container-details-discretion-text">
                              {item.snippet.description}
                           </p>
                        </div>
                     </div>
                     <div className="youtube-search-video-container-details-right">
                        <span className="material-symbols-outlined">more_vert</span>
                     </div>
                  </section>
               </div>
            );
         })}
      </div>
   );
}
