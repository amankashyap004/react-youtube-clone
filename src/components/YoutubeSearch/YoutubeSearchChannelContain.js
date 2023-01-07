import React from "react";
import { useParams } from "react-router-dom";
import "./YoutubeSearch.css";

export default function YoutubeSearchChannelContain() {
   const { searchQuery } = useParams();
   // console.log(searchQuery);
   const youtubeAPIKey = "AIzaSyDJYaKEW09xd_Lv-aaIW3KWD7BChl1-H2w";
   const videoHTTP = "https://www.googleapis.com/youtube/v3/search?";

   const fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet&q=${searchQuery}&type=channel&safeSearch=none&maxResults=1`;
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
         {apiAllData?.map((item, i) => {
            return (
               <div className="youtube-search-Channel-section" key={i}>
                  <section className="youtube-search-channel-container">
                     <div className="youtube-search-channel-container-image">
                        <img
                           src={item.snippet.thumbnails.high.url}
                           alt="yt thumbnail"
                           className="youtube-search-channel-container-img"
                        />
                     </div>
                  </section>
                  <section className="youtube-search-channel-container-details">
                     <div className="youtube-search-channel-container-details-left">
                        <div className="youtube-search-channel-container-details-channel-section">
                           <p className="youtube-search-channel-container-details-channel-name">
                              {item.snippet.channelTitle}
                           </p>
                        </div>
                        <div className="youtube-search-channel-container-details-more-details">
                           <p className="text-para-small">@{item.snippet.channelTitle}</p>
                           <p className="text-para-small">&nbsp;•&nbsp;</p>
                           <p className="text-para-small">{"28M"} subscribers</p>
                        </div>
                        <div className="youtube-search-channel-container-details-discretion">
                           <p className="youtube-search-channel-container-details-discretion-text">
                              {item.snippet.description}
                           </p>
                        </div>
                     </div>
                  </section>
               </div>
            );
         })}
      </div>
   );
}
