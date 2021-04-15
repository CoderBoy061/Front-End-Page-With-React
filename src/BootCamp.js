import { Avatar } from '@material-ui/core';
import React from 'react';
import './BootCamp.css';

function BootCamp() {
    return (
        <div className="bootcamp">
             <div className="source-bootcamp">
      <div className="source_heading">
        <h1>Boot-Camps</h1>
        <p>Comprehensive courses on various topics</p>
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
                    <h1>Responsive Web Design Boot-camp</h1>
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
                    <h1>The UI  Design BootCamp for Begineer</h1>
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
    )
}

export default BootCamp
