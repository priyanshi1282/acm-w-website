import React from "react";
import "./Home.css";
import introVideo from "../images/intro-video.mp4";
import Heading from "./Heading";

export default function Home() {
  return (
    <>
      <div className="home-div">
        <div className="home-container">
        <video src={introVideo} className="intro" autoPlay muted loop></video>
        <Heading main="MUACM-W" />
        <h2>Medi-Caps University, Indore</h2>
        <h3>Association for Computing Machinery Women Student Chapter</h3>
        </div>
      </div>
    </>
  );
}
