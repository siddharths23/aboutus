import React from "react";
import "../css/aboutUs.css";
import MemberProfile from "../components/memberProfile";

function AboutUsPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">ABOUT TEAM 5</h1>
      </div>
      <div className="introduction">
        <p>
          Welcome to our page!!! We are a group of computer science students who
          are passionate about programming and technology. Get to know us by
          checking out our profiles below.
        </p>
      </div>
      <div className="team-members-container">
        <a href="/siddharth">Siddharth Sankar</a>
        <a href="/dania">Dania Dababo</a>
        <a href="/yahya">Yahya Obeid</a>
        <a href="/hanlei">Hanlei Liu</a>
        <a href="/muhammed">Muhammed Nafees</a>
        <a href="/farah">Farah Jamjoum</a>
      </div>
      <div className="team-details">
        <p> communication method - Discord</p>
        <p>
          Team meeting schedule- Wednesday -5:30PM-6:30PM, Tuesday-
          3:30PM-4:30PM
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
