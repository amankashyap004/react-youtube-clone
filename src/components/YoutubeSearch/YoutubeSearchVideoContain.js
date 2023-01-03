import React from "react";
import YoutubeSearchVideoContainer from "./YoutubeSearchVideoContainer";
import YoutubeSearchVideoContainerDetails from "./YoutubeSearchVideoContainerDetails";

export default function YoutubeSearchVideoContain() {
   let youtubeAPIKey = "AIzaSyAvqzRb2G7RmclgTATLtEogCtoec0c2zmE";
   let videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet&q=song&type=video&safeSearch=none&maxResults=1`;
   const [apiAllData, setApiAllData] = React.useState([]);

   React.useEffect(() => {
      fetch(fetchUrl)
         .then((res) => res.json())
         .then((data) => {
            const result = data.items?.map((item) => ({
               key: data.items.id,
               ...item,
            }));
            setApiAllData(result);
            console.log(result);
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <div>
         {apiAllData?.map((item) => {
            return (
               <div className="youtube-search-video-section" key={item.id}>
                  <YoutubeSearchVideoContainer
                     keyName={item.videoId}
                     image={item.snippet.thumbnails.high.url}
                     // videoDuration={item.contentDetails.duration}
                  />
                  <YoutubeSearchVideoContainerDetails
                     title={item.snippet.title}
                     // viewCount={item.statistics.viewCount}
                     publishedAt={item.snippet.publishedAt}
                     channelTitle={item.snippet.channelTitle}
                     description={item.snippet.description}
                  />
               </div>
            );
         })}
      </div>
   );
}
