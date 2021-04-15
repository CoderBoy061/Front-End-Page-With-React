import { Avatar } from "@material-ui/core";
import React from "react";
import "./ComputerScience.css"

function ComputerScience() {
  return (
    <div className="computerScience">
      <div className="source-bootcamp">
        <div className="source_heading">
          <h1>Computer Science</h1>
          <p>Some courses to level up your computer science skills</p>
        </div>
        <div className="cards">
          <div className="source_cards">
            <div className="cards_heading">
              <h1>Learn Python Language for Free</h1>
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
              <h1>Practical Maths for Frontend developer</h1>
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
              <h1>Learn Merge Short in Java-Script</h1>
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
              <h1>Learn Binary Search in Java Script</h1>
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

export default ComputerScience;
