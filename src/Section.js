import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="section">
      <div className="section_header">
        <h1>Don't spend $15,000 on a coding bootcamp</h1>
        <p>
          Our career path helps motivated students become <br></br> hireable
          frontend developers for <strong>1% of the cost</strong>{" "}
        </p>
        <button>Try It Out Now</button>
      </div>
      <div className="section_image">
        <img
          className="section_img"
          src="https://cdn.pixabay.com/photo/2017/08/31/11/43/man-2700445_960_720.png"
          alt=""
        />
      </div>
      </div>
 
  );
}

export default Section;
