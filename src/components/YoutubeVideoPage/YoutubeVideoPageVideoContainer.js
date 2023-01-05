import React from "react";

export default function YoutubeVideoPageVideoContainer() {
   const youtubeAPIKey = "AIzaSyDJYaKEW09xd_Lv-aaIW3KWD7BChl1-H2w";
   const videoHTTP = "https://www.googleapis.com/youtube/v3/video?";

   let fetchUrl = `${videoHTTP}key=${youtubeAPIKey}&part=snippet&maxResults=1`;
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
            return <div className="youtube-video-page-video-container" key={item.id}></div>;
         })}
      </div>
   );
}
