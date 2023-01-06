import React from "react";
import YoutubeSearchChannelContainer from "./YoutubeSearchChannelContainer";
import YoutubeSearchChannelContainerDetails from "./YoutubeSearchChannelContainerDetails";
import { useParams } from "react-router-dom";
import "./YoutubeSearchChannel.css";

export default function YoutubeSearchChannelContain() {
   let { searchQuery } = useParams();
   // console.log(searchQuery);
   let youtubeAPIKey = "AIzaSyDJYaKEW09xd_Lv-aaIW3KWD7BChl1-H2w";
   let videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet&q=${searchQuery}&type=channel&safeSearch=none&maxResults=1`;
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
   }, [searchQuery]);
   return (
      <div>
         {apiAllData?.map((item) => {
            return (
               <div className="youtube-search-Channel-section" key={item.id}>
                  <YoutubeSearchChannelContainer channelImage={item.snippet.thumbnails.high.url} />
                  <YoutubeSearchChannelContainerDetails
                     channelChannelTitle={item.snippet.channelTitle}
                     channelDescription={item.snippet.description}
                  />
               </div>
            );
         })}
      </div>
   );
}
