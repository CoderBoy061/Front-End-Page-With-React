import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Source.css";

function Source() {
  return (
    <div className="source">
      <div className="source_heading">
        <h1>Most popular courses</h1>
        <p>Get started with these popular intro courses.</p>
      </div>
      <div className="cards">
        <div className="source_cards">
          <div className="cards_heading">
            <h1>The Frontend Carrer Developer Path</h1>
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
                    <h1>The React -js BootCamp for Beginner </h1>
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
                    <h1>Buils an Instagram clone In React</h1>
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
                    <h1>The Responsive Web Design BootCamp</h1>
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
  );
}

export default Source;
