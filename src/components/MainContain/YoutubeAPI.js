import React from "react";
import "./Style.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function YoutubeAPI() {
   const [isActive, setISActive] = React.useState(false);
   const onHover = () => {
      setISActive(!isActive);
   };

   // const onClickVideoPage = () => {
   //    console.log(item.id);
   // };

   const youtubeAPIKey = "AIzaSyAvqzRb2G7RmclgTATLtEogCtoec0c2zmE";
   const videoHTTP = "https://www.googleapis.com/youtube/v3/videos?";

   const fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=IN`;
   const [apiAllData, setApiAllData] = React.useState([]);

   React.useEffect(() => {
      fetch(fetchUrl)
         .then((res) => res.json())
         .then((data) => {
            const result = data.items?.map((item) => ({
               ...item,
            }));
            setApiAllData(result);
            // console.log(result);
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <div className="youtube-api-container">
         {apiAllData.map((item, i) => {
            return (
               <section
                  className={
                     isActive
                        ? "video-container-section video-container-section-hover"
                        : "video-container-section"
                  }
                  onDoubleClick={onHover}
                  onClick={() => console.log(item.id)}
                  key={i}
               >
                  {/* { console.log(item.snippet.thumbnails.high.url)} */}
                  <Link key={item.id} to={`/video/${item.id}`}>
                     <div className="video-container-image">
                        <img
                           src={item.snippet.thumbnails.high.url}
                           alt="yt thumbnail"
                           className="video-container-img"
                        />
                        <div className="video-container-timer">
                           <p className="video-container-timer-text">
                              {moment
                                 .utc(
                                    moment.duration(item.contentDetails.duration).asSeconds() * 1000
                                 )
                                 .format("mm:ss")}
                           </p>
                        </div>
                     </div>
                  </Link>
                  <div
                     className={
                        isActive
                           ? "video-container-details video-container-details-padding"
                           : "video-container-details"
                     }
                  >
                     <div className="video-container-details-left">
                        <span className="material-symbols-outlined icon header-left-icon header-user-icon">
                           person
                        </span>
                     </div>
                     <div className="video-container-details-right">
                        <h3 className="video-container-details-title">{item.snippet.title}</h3>
                        <h5 className="video-container-details-channel-name">
                           {item.snippet.channelTitle}
                        </h5>
                        <div className="video-container-details-more-details">
                           <p>
                              {item.statistics.viewCount} views •{" "}
                              {moment(`${item.snippet.publishedAt}`, "YYYYMMDD").fromNow()}
                              {/* {console.log(item.statistics.viewCount)} */}
                           </p>
                        </div>
                     </div>
                     <div
                        className={
                           isActive
                              ? "video-container-details-more-icon-display"
                              : "video-container-details-more-icon"
                        }
                     >
                        <span className="material-symbols-outlined">more_vert</span>
                     </div>
                  </div>
                  <section
                     className={
                        isActive
                           ? "video-container-more-container"
                           : "video-container-more-container display-none"
                     }
                  >
                     <div className="video-container-more">
                        <span className="material-symbols-outlined">schedule</span>
                        <p className="video-container-more-text">Watch Letter</p>
                     </div>
                     <div className="video-container-more">
                        <span className="material-symbols-outlined">playlist_add</span>
                        <p className="video-container-more-text">Add to queue</p>
                     </div>
                  </section>
               </section>
            );
         })}
      </div>
   );
}
