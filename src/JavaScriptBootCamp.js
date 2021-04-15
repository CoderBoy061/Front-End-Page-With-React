import { Avatar } from "@material-ui/core";
import React from "react";
import "./JavaScriptBootCamp.css";

function JavaScriptBootCamp() {
  return (
    <div className="javaScript_bootcamp">
      <div className="source-bootcamp">
        <div className="source_heading">
          <h1>Java Script</h1>
          <p>JavaScript is the worlds most popular programming language</p>
        </div>
        <div className="cards">
          <div className="source_cards">
            <div className="cards_heading">
              <h1>The Frontend Carrer Development</h1>
            </div>
            <div className="cards_content_main">
              <div className="cards_content">
                <small>928 Lessons | 75 Hours</small>
                <small>
                  With <strong>Pel Herald Borgen</strong>
                </small>
              </div>
              <Avatar />
            </div>
          </div>
          <div className="source_cards">
            <div className="cards_heading">
              <h1>The Java-Script Bootcamp for begineer</h1>
            </div>
            <div className="cards_content_main">
              <div className="cards_content">
                <small>928 Lessons | 75 Hours</small>
                <small>
                  With <strong>Pel Herald Borgen</strong>
                </small>
              </div>
              <Avatar />
            </div>
          </div>
          <div className="source_cards">
            <div className="cards_heading">
              <h1>Introduction to Java-Script for Begineer</h1>
            </div>
            <div className="cards_content_main">
              <div className="cards_content">
                <small>928 Lessons | 75 Hours</small>
                <small>
                  With <strong>Pel Herald Borgen</strong>
                </small>
              </div>
              <Avatar />
            </div>
          </div>
          <div className="source_cards">
            <div className="cards_heading">
              <h1>Built a Snake game in Java-Script</h1>
            </div>
            <div className="cards_content_main">
              <div className="cards_content">
                <small>928 Lessons | 75 Hours</small>
                <small>
                  With <strong>Pel Herald Borgen</strong>
                </small>
              </div>
              <Avatar />
            </div>
          </div>
        </div>
        <button className="see_all">See All</button>
      </div>
    </div>
  );
}

export default JavaScriptBootCamp;
