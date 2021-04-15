import React from "react";
import './UnderSection.css'

function UnderSection() {
  return (
    <div className="under_section">
      <div className="underSection_img">
        <img
        className="section_image"
          src="https://images.all-free-download.com/images/graphiclarge/girl_in_wheelchair_clip_art_22945.jpg"
          alt="women"
        />
        <img
        className="section_image"
        src="https://scrimba.com/static/art/peep-man-bearded.svg"
        alt=""

        />
      </div>
      <div className="section_heading">
          <h1>A coding community like no other</h1>
          <p>Not a boring forum. But live events, stand-ups, competitions, and more.</p>
      </div>
      <div className="section_heading">
          <h1>A mind-blowing way to learn to code</h1>
          <p>Our interactive code-learning tool has been blowing minds since 2017.</p>
      </div>
    </div>
  );
}

export default UnderSection;
