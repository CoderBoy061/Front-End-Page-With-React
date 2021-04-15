import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
             <div className="footer_navbar">
                <img
                className="footer_img"
                src="https://scrimba.com/static/art/dark-logo.svg"
                alt=""
                />
                <strong>Resources</strong>
                <strong>Courses</strong>
                <strong>Company</strong>
                
               
            </div>
            <div className="footer_navbar">
                <strong>Home</strong>
              
                <small>Blog</small>
                <small> All Courses</small>
                <small>About us</small>
       
               
            </div>
            <div className="footer_navbar">
                <strong>Discord</strong>
              
                <small>FAQ</small>
                <small> Intro Courses </small>
                <small>Contact us</small>
       
               
            </div>
            <div className="footer_navbar">
                <strong>Twiter</strong>
              
                <small>Terms</small>
                <small> Learn Java-Script</small>
                <small>Support Chat</small>
       
               
            </div>
            <div className="footer_navbar">
                <strong>Youtube</strong>
                
              
                <small>Privacy</small>
                <small> Learn React</small>
                <small>Gift Membership</small>
       
               
            </div>  
                     

                
    
    </div>
  );
}

export default Footer;
