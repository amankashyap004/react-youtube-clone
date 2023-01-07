import React from "react";
import "./YoutubeVideoPage.css";
import YoutubeRecommendationVideo from "../YoutubeRecommendationVideo/YoutubeRecommendationVideo";
import YoutubeVideoPageVideoDetails from "./YoutubeVideoPageVideoDetails";
import moment from "moment";
import { useParams } from "react-router-dom";

export default function YoutubeVideoPage() {
   const youtubeAPIKey = "AIzaSyAvqzRb2G7RmclgTATLtEogCtoec0c2zmE";
   const videoHTTP = "https://www.googleapis.com/youtube/v3/videos?";

   const { videoId } = useParams();

   const fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&id=${videoId}&part=snippet%2CcontentDetails%2Cstatistics`;
   const [apiAllData, setApiAllData] = React.useState(null);

   React.useEffect(() => {
      fetch(fetchUrl)
         .then((res) => res.json())
         .then((data) => {
            // const result = data.items?.map((item) => ({
            //    ...item,
            // }));
            setApiAllData(data.items[0]);
            console.log(data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="youtube-video-page-section" key={videoId}>
         <section className="youtube-video-page-section-video-container">
            <div className="youtube-video-page-section-video-section">
               <object
                  data={`https://www.youtube.com/embed/${videoId}`}
                  className="youtube-video-page-video-contain-video"
               ></object>
            </div>
            <div className="youtube-video-page-section-video-details">
               {apiAllData && (
                  <YoutubeVideoPageVideoDetails
                     title={apiAllData?.snippet?.title}
                     tags={apiAllData?.snippet?.tags}
                     channelTitle={apiAllData?.snippet?.channelTitle}
                     description={apiAllData?.snippet?.description}
                     publishedAt={moment(
                        `${apiAllData?.snippet?.publishedAt}`,
                        "YYYYMMDD"
                     ).fromNow()}
                     viewCount={apiAllData?.statistics?.viewCount}
                     likeCount={apiAllData?.statistics?.likeCount}
                     video={apiAllData}
                  />
               )}
            </div>
         </section>
         <div className="youtube-video-page-section-recommendation">
            <YoutubeRecommendationVideo />
         </div>
      </div>
   );
}
