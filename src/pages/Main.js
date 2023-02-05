import React from "react";
import bgImage from "../assets/video.mp4";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <video autoPlay loop muted className="video">
        <source src={bgImage} type="video/mp4" />
      </video>
      <div className="text-wrapper">
        <h1>Background Video in React</h1>
        <p>Winter Calgary is suck</p>
      </div>
    </div>
  );
};
