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
    <Test/>
    <Test/>
    <Test/>
    <Test/>
    <Test/>
    <Test/>
    <Test/>
    <Test/>
    </div>
    
  );
};

export default About;


function Test() {
  return (
    <div class="entry">
        <div class="dis">
          <h3>
            This is dumy text about the job links and about project. fgffh fgfh gshf dgffhg fgfh gfhhg dg gfghgs dgfxgrdfd dsgdhfgdrseg dghdfgtfsd redgsderd dfghffsd fg rfgfcg sgdfdfw werserd ferdxdfd rgerd
          </h3>
        </div>
        <a href="https://getcssscan.com/css-buttons-examples" target={"_blank"}>
          <button
            class="butt"
            value="opening your link in new tab"
            onClick={(e) => alert(e.target.value)}
          >
            <h1>click me</h1>
          </button>
        </a>
      </div>
  )
}