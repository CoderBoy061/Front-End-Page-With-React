import { Avatar } from "@material-ui/core";
import React from "react";
import "./VueJsBootcamp.css";

function VueJsBootcamp() {
  return (
    <div className="vueJsBootCamp">
      <div className="source-bootcamp">
        <div className="source_heading">
          <h1>Vue Js</h1>
          <p>Vue is an approachable, versatile and performant JavaScript framework</p>
        </div>
        <div className="cards">
          <div className="source_cards">
            <div className="cards_heading">
              <h1>The Vue Js BootCamp for Begineer</h1>
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
              <h1>Learn Vuetify absolutely free for begineer</h1>
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
              <h1>Learn Vue Js For Absolutely free for Begineer</h1>
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
              <h1>Learn Vuex For Absolutely free for begineer</h1>
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

export default VueJsBootcamp;
