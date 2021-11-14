import React from "react";
import "./LoadingAnimation.css";
import loadingLogo from "../assets/loading.gif";

function LoadingAnimation() {
  return (
    <>
      <img src={loadingLogo} alt="loading" className="loading-gif" />
      <h1 className="text">Give us a second, we're loding the internet </h1>
    </>
  );
}

export default LoadingAnimation;
