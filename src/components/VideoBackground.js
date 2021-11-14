import React from "react";
import BackgroundVideo from "../assets/retro vapor wave abstract live wallpaper [chec4_NfVDk].mp4";

function VideoBackground() {
  let videoStyles = {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    filter: "blur(5px)",
  };
  return (
    <div>
      <video autoPlay loop muted style={videoStyles}>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
