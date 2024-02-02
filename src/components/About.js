import React from "react";
import "./About.css";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";
export default function About() {
  return (
    <>
    <div className="about">
      <Heading text="What is" main="ACM-W" />
      <div className="about-text">
        <p>
          MUACM is an official computing student chapter of Medi-Caps
          University. We are not just an organization, we are a family of
          like-minded people, who intend to make a difference in the society.{" "}
        </p>
        <p>
          MUACM provides you a platform to explore, experience and contribute to
          the computing world, globally. It encourages you to pave the path of
          your career under the guidance of professionals.{" "}
        </p>
        <p>Know more about <a className="link" href="https://www.acm.org/" target="_blank" rel="noopener noreferrer">ACM</a>.</p>
      </div>
      <div className="about-link-div">
        <div className="about-link-text">
          <p>Connect With Us</p>
        </div>
        <div className="about-link">
          <a href="/"> <i className='bx bxl-discord-alt'></i></a>
          <a href="/"> <i className='bx bxl-instagram-alt' ></i></a>
          <a href="/"> <i className='bx bxl-linkedin' ></i></a>
          <a href="/"> <i className='bx bxl-youtube' ></i></a>
        </div>
      </div>
    <HorizontalRule />

    </div>
    </>
  );
}
