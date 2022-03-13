import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Home.scss";
import axios from "axios";

const API_URL = "https://api.twitch.tv/helix/";
const token = "jwvny6p6y61zqdkc4c2599537x4rfk";

export default function Home() {
  let params = useParams();
  let channelId = null;
  if (params.channelId) {
    channelId = params.channelId;
  }
  const [featuredVid, setFeaturedVid] = useState(null);
  const [streams, setStreams] = useState([]);
  useEffect(() => {
    let featured;
    if (channelId === null) {
      axios
        .get(`${API_URL}streams?language=en`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Client-Id": `hz0caw5kq9uhz99jiwkj94ixvmg3ej`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          data = data.data;
          for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            if ((data[i].type = "live")) {
              setFeaturedVid(data[i].user_name);
              data.splice(i, 1);
              break;
            }
          }
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
          data = data.data;
          setFeaturedVid(data[0].user_name);
        });
    }
  }, [channelId]);

  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <div>
      <iframe
        src={`https://player.twitch.tv/?channel=${featuredVid}&parent=localhost&muted=true`}
        height="450px"
        width="800px"
        allowFullScreen={true}
      ></iframe>
      <iframe
        src={`https://www.twitch.tv/embed/${featuredVid}/chat?parent=localhost`}
        height="600px"
        width="400px"
      ></iframe>
    </div>
  );
}
