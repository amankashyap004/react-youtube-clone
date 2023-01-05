import React from "react";
import YoutubeSearchVideoContainer from "./YoutubeSearchVideoContainer";
import YoutubeSearchVideoContainerDetails from "./YoutubeSearchVideoContainerDetails";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

export default function YoutubeSearchVideoContain() {
   let { searchQuery } = useParams();

   let youtubeAPIKey = "AIzaSyDJYaKEW09xd_Lv-aaIW3KWD7BChl1-H2w";
   let videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet&q=${searchQuery}&type=video&safeSearch=none&maxResults=1`;
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
      <div>
         {apiAllData?.map((item) => {
            return (
               <div className="youtube-search-video-section" key={item.id}>
                  <YoutubeSearchVideoContainer
                     image={item.snippet.thumbnails.high.url}
                     // videoDuration={item.contentDetails.duration}
                  />
                  <YoutubeSearchVideoContainerDetails
                     title={item.snippet.title}
                     // viewCount={item.statistics.viewCount}
                     publishedAt={moment(`${item.snippet.publishedAt}`, "YYYYMMDD").fromNow()}
                     channelTitle={item.snippet.channelTitle}
                     description={item.snippet.description}
                  />
               </div>
            );
         })}
      </div>
   );
}
