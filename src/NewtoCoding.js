import { Avatar } from "@material-ui/core";
import React from "react";
import "./NewtoCoding.css";

function NewtoCoding() {
  return (
    <div className="newto_coding">
      <div className="source-bootcamp">
        <div className="source_heading">
          <h1>New To Coding ?</h1>
          <p>Check out our courses to start you on your journey.</p>
        </div>
        <div className="cards">
          <div className="source_cards">
            <div className="cards_heading">
              <h1>The Frontend Developer Path for Begineer</h1>
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
              <h1>HTML and CSS Crash Course for begineer</h1>
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
              <h1>The Coding Bootcamp Primer </h1>
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

export default NewtoCoding;
