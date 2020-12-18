import React from "react";
import "./Css/Video.css";

function MyVideo() {
  return (
    <div>
      <video
        controls
        poster={
          "https://www.sightsaversindia.in/wp-content/uploads/2019/01/Janki-in-the-fields-near-her-home-along-with-her-sister-Shanti-1400x788.jpg"
        }
        className="lb_video"
        src="https://youtu.be/nGS9ibpp2_o"
      ></video>
    </div>
  );
}

export default MyVideo;
