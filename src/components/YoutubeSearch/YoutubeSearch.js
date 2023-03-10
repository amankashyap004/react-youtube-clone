import React from "react";
import YoutubeSearchVideoContain from "./YoutubeSearchVideoContain";
import YoutubeSearchChannelContain from "./YoutubeSearchChannelContain";
import YoutubeSearchFilters from "./YoutubeSearchFilters";
import "./YoutubeSearch.css";
import { useParams } from "react-router-dom";

export default function YoutubeSearch() {
   const { searchQuery } = useParams();
   const videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   const fetchChannelUrl = `${videoHTTP}key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&q=${searchQuery}&type=channel&safeSearch=none&maxResults=1`;
   const [apiChannelAllData, setApiChannelAllData] = React.useState([]);

   React.useEffect(() => {
      fetch(fetchChannelUrl)
         .then((res) => res.json())
         .then((data) => {
            const channelResult = data.items?.map((item) => ({
               ...item,
            }));
            setApiChannelAllData(channelResult);
            console.log(channelResult);
         })
         .catch((err) => console.log(err));
   }, [searchQuery]);

   const fetchVideoUrl = `${videoHTTP}key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&q=${searchQuery}&type=video&safeSearch=none&maxResults=3`;
   const [apiVideoAllData, setApiVideoAllData] = React.useState([]);

   React.useEffect(() => {
      fetch(fetchVideoUrl)
         .then((res) => res.json())
         .then(async (data) => {
            const videoResult = data.items;
            setApiVideoAllData(videoResult);
            for (let i = 0; i < videoResult.length; i++) {
               const videoId = videoResult[i].id.videoId;
               const videoRes = await fetch(
                  `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&id=${videoId}&part=snippet%2CcontentDetails%2Cstatistics`
               );
               const videoData = await videoRes.json();
               videoResult[i].videoDuration = videoData.items[0].contentDetails.duration;
               const channelRes = await fetch(
                  `${videoHTTP}key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&q=${searchQuery}&id=${videoId}&type=channel&safeSearch=none`
               );
               const channelData = await channelRes.json();
               videoResult[i].channelImage = channelData.items[0].snippet.thumbnails.high.url;
            }
            console.log(videoResult);
         })
         .catch((err) => console.log(err));
   }, [searchQuery]);

   return (
      <section className="YoutubeSearchSection">
         <section className="youtube-search-section-filters">
            <YoutubeSearchFilters />
         </section>
         <div className="main-hr margin-top-zero"></div>
         <section className="youtube-search-videos">
            {apiChannelAllData?.map((item, i) => {
               return <YoutubeSearchChannelContain key={i} channelResult={item} />;
            })}
            <div className="main-hr"></div>
            {apiVideoAllData?.map((item, i) => {
               return <YoutubeSearchVideoContain key={i} videoResult={item} />;
            })}
         </section>
      </section>
   );
}
