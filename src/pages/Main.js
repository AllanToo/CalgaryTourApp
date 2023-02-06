import React from "react";
import bgImage from "../assets/video.mp4";
import "./Main.css";
import homelogo from "../assets/home.gif";

export const Main = () => {
  return (
    <div className="body">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
      <div className="text-wrapper">
        <h1 style={{ fontWeight: "bold" }}>
          Explore the winter treasure that is Calgary, with local expertise
        </h1>
        <h1>
          {" "}
          <img src={homelogo} style={{ width: "300px" }}></img>{" "}
        </h1>
      </div>
    </div>
  );
};
