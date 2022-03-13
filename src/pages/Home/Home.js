import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const API_URL = "https://api.twitch.tv/helix/";
const token = "jwvny6p6y61zqdkc4c2599537x4rfk";

export default function Home(channelId) {
  const [featuredVid, setFeaturedVid] = useState(null);
  useEffect(() => {
    let featured;
    if (!channelId) {
      axios.get(`${API_URL}streams`).then(({ data }) => {
        featured = data[0];
        data = data.unshift();
        setStreams(data);
      });
    } else {
      axios
        .get(`${API_URL}search/channels?query=${channelId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Client-Id": `hz0caw5kq9uhz99jiwkj94ixvmg3ej`,
          },
        })
        .then(({ data }) => {
          featured = data[0];
        });
    }
    setFeaturedVid = `${featured.user_name}&parent=test&muted=true`;
  });
  const [streams, setStreams] = useState([]);
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <div>
      <iframe
        src={`https://player.twitch.tv/?channel=${featuredVid}`}
        height="600px"
        width="800px"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}
