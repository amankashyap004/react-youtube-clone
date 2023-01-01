import React from "react";
import "./YoutubeSearch";

export default function YoutubeSearchVideoContain() {
   const [isActive, setISActive] = React.useState(false);
   const onHover = () => {
      setISActive(!isActive);
   };

   let youtubeAPIKey = "AIzaSyAKXbF82Gl3DlGJBRpysQfyEOPA58KtQ00";
   let videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=IN`;
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

   }, []);
   return (
      <div className="demo">
         {apiAllData.map((item) => {
            return (
               <section
                  className={
                     isActive
                        ? "video-container-section video-container-section-hover"
                        : "video-container-section"
                  }
                  onClick={onHover}
                  key={item.id}
               >
                  {/* { console.log(item.snippet.thumbnails.high.url)} */}

                  <div className="video-container-image">
                     <img
                        src={item.snippet.thumbnails.high.url}
                        alt="yt thumbnail"
                        className="video-container-img"
                     />
                     <div className="video-container-timer">
                        <p className="video-container-timer-text">
                           {item.contentDetails.duration}
                        </p>
                     </div>
                  </div>
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
                              {item.statistics.viewCount} views • {item.snippet.publishedAt}
                              {console.log(item.statistics.viewCount)}
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
