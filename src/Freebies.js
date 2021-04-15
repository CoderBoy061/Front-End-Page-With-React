import { Avatar } from "@material-ui/core";
import React from "react";
import "./Freebies.css";

function Freebies() {
  return (
    <div className="freebies">
      <div className="source-bootcamp">
        <div className="source_heading">
          <h1>Feebies</h1>
          <p>High-quality Scrimba courses that don't cost a dime</p>
        </div>
        <div className="cards">
          <div className="source_cards">
            <div className="cards_heading">
              <h1>HTML CSS Crash Course for Beginner</h1>
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
              <h1>The React -js For Absolutely Free for begineer</h1>
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
              <h1>Learn UI Design Fundamentals for Begineer</h1>
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
              <h1>Learn Flex Box Absolutely free for Begineer</h1>
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

export default Freebies;
