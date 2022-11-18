import React from "react";
import { useHref } from "react-router-dom";
import "./all.css";

const About = () => {
  return (
    // <div
    // style={{
    // 	display: 'flex',
    // 	justifyContent: 'Right',
    // 	alignItems: 'Right',
    // 	height: '100vh'
    // }}
    // >
    // <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>

    // </div>
    <div class="cont">
      <div class="entry">
        <div class="dis">
          <h3>Cabinet Secretariat </h3>
        </div>
        <a href="https://cabsec.gov.in/page.php?page=58" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Department of Atomic Energy</h3>
        </div>
        <a href="http://dae.nic.in/?q=node/43" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Ministry of Agriculture </h3>
        </div>
        <a href="http://agricoop.nic.in/recruitment" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Ministry of Ayush </h3>
        </div>
        <a
          href="http://ayush.gov.in/tenders-vacancies-and-announcements/vacancies"
          target={"_blank"}
        >
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Ministry of Chemicals and Fertilizers </h3>
        </div>
        <a href="http://fert.nic.in/latest-releases-archive" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Ministry of Civil Aviation </h3>
        </div>
        <a
          href="http://www.civilaviation.gov.in/recruitments"
          target={"_blank"}
        >
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Ministry of Commerce and Industry</h3>
        </div>
        <a href="http://dipp.nic.in/publications/jobs" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
      <div class="entry">
        <div class="dis">
          <h3>Ministry of Communications and Information Technology </h3>
        </div>
        <a href="http://www.dot.gov.in/all-vacancies" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
