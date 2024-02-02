import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import HorizontalRule from "./HorizontalRule";
import "./Team.css";
import logo from "../images/muacmw-logo.png";
import priyanshi from "../images/teamImages/Priyanshi.jpg";
import { CouncileTeamData } from "./CouncileTeamData";

export default function Team() {
  return (
    <>
      <div className="team">
        <div className="team-heading">
          <img src={logo} alt="acmw" className="logo-img" />
          <Heading text="our" main="Team" />
        </div>

        <HorizontalRule />

        {/* <div className="faculty">           
            <div className="faculty-card">
            <Card url={priyanshi} initial="N" name="Nitika Vats Doohan ma'am" post="Faculty Advisor" linkedin="https://priyanshi.co/" github="https://priyanshi.co/" instagram="https://priyanshi.co/" />
            </div>
            <div className="faculty-info">
            <Heading text="faculty" main="advisor" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio vero exercitationem quos qui unde suscipit porro incidunt illum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nobis?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur nulla doloribus natus quidem! Facere deserunt cumque voluptatibus accusamus esse?
            </p>
            </div>
        </div> */}

        <div className="members">
          <Heading text="Facutly" main="Advisor" />
          <div className="members-container">
            <Card
              url={priyanshi}
              initial="N"
              name="Nitika Vats Doohan ma'am"
              post="Faculty Advisor"
              linkedin="https://priyanshi.co/"
              github="https://priyanshi.co/"
              instagram="https://priyanshi.co/"
            />
            <Card
              url={priyanshi}
              initial="N"
              name="Nitika Vats Doohan ma'am"
              post="Faculty Advisor"
              linkedin="https://priyanshi.co/"
              github="https://priyanshi.co/"
              instagram="https://priyanshi.co/"
            />
          </div>
        </div>

        <HorizontalRule />
        {/* councile team */}
        <div className="members">
          <Heading text="our" main="Councile" />

          <div className="members-container">
            {CouncileTeamData.map((person) => {
              return (
                <Card
                  url={person.url}
                  initial={person.initial}
                  name={person.name}
                  post={person.post}
                  linkedin={person.linkedin}
                  github={person.github}
                />
              );
            })}
          </div>
        </div>
{/* councile ends here */}

        <HorizontalRule />

        {/* core team */}
        <div className="members">
          <Heading text="our" main="Core Team" />

          <div className="members-container">
            {CouncileTeamData.map((person) => {
              return (
                <Card
                  url={person.url}
                  initial={person.initial}
                  name={person.name}
                  post={person.post}
                  linkedin={person.linkedin}
                  github={person.github}
                />
              );
            })}
          </div>
        </div>
{/* core ends here */}


      </div>
    </>
  );
}
