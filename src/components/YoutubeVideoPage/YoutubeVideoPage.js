import React from "react";
import "./YoutubeVideoPage.css";
import YoutubeVideoPageVideoContain from "./YoutubeVideoPageVideoContain";
import YoutubeRecommendationVideo from "../YoutubeRecommendationVideo/YoutubeRecommendationVideo";
import YoutubeVideoPageSectionVideoDetails from "./YoutubeVideoPageSectionVideoDetails";
import moment from "moment";

export default function YoutubeVideoPage() {
   let youtubeAPIKey = "AIzaSyAvqzRb2G7RmclgTATLtEogCtoec0c2zmE";
   let videoHTTP = "https://www.googleapis.com/youtube/v3/videos?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1&regionCode=IN`;
   const [apiAllData, setApiAllData] = React.useState([]);

   React.useEffect(() => {
      fetch(fetchUrl)
         .then((res) => res.json())
         .then((data) => {
            const result = data.items?.map((item) => ({
               ...item,
            }));
            setApiAllData(result);
            console.log(result);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section>
         {apiAllData?.map((item) => {
            return (
               <div className="youtube-video-page-section" key={item.id}>
                  <section className="youtube-video-page-section-video-container">
                     <div className="youtube-video-page-section-video-section">
                        <YoutubeVideoPageVideoContain videoId={item.id} />
                     </div>
                     <div className="youtube-video-page-section-video-details">
                        <YoutubeVideoPageSectionVideoDetails
                           title={item.snippet.title}
                           tags={item.snippet.tags}
                           channelTitle={item.snippet.channelTitle}
                           description={item.snippet.description}
                           publishedAt={moment(`${item.snippet.publishedAt}`, "YYYYMMDD").fromNow()}
                           viewCount={item.statistics.viewCount}
                           likeCount={item.statistics.likeCount}
                        />
                     </div>
                  </section>
                  <div className="youtube-video-page-section-recommendation">
                     <YoutubeRecommendationVideo />
                  </div>
               </div>
            );
         })}
      </section>
   );
}
