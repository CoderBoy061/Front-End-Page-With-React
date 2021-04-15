import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about_platform">
        <img
          className="about_img"
          src="https://scrimba.com/static/art/about-video-cover.jpg"
          alt=""
        />
        <div className="about_content">
          <h1>About the platform</h1>
          <p>
            Scrimba is the next-generation platform for learning how to code.
            Our screencasts enable you to interact with the code directly in the
            player. This way, you'll have more fun and learn faster.<br></br>
            Our courses cover subjects like HTML, CSS, JavaScript, React, Vue,
            and more. They're all made with the goal of advancing your career.
            So pick a course and give your career a boost!
          </p>
        </div>
      </div>
      <div className="about_founder">
        <div className="about_content">
          <h1>Hi! from the founders</h1>
          <p>Our goal is to create the best possible coding school at the lowest possible cost for students. If we succeed with this, it’ll give anyone who wants to become a software developer a realistic shot at succeeding. Regardless of where they live and the size of their wallets.<br></br>
          <strong>“To achieve this, we’ve created a new video format for code screencasts. We call it “scrims”.</strong><br></br>
          This format is the backbone of our school. Not only because it results in a superior learning experience. But also because it enables us to iterate more quickly, to attract better teachers, to facilitate better peer-learning, to keep server costs low, and much more.</p>
        </div>
        <img
          className="about_imgg"
          src="https://scrimba.com/static/art/founders.jpg"
          alt=""
        />
      </div>
      <div className="contact_button">
          <p>Contact With Us In Twiter</p>
          <button>Say Hi @Sindreaars</button>
          <button>Say Hi @PerBogen</button>
      </div>
    </div>
  );
}

export default About;
