import React from "react";

const Footer = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/PNG5mqR/footer-bg-1-1.png)`,
      }}>
      <footer
        
        className="footer p-10"
      >
        <div className="">
          <span className="footer-title">Emergency Checkup</span>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="my-6">
        <p>Copyright © 2022 - All right reserved by Masud</p>
      </div>
    </div>
  );
};

export default Footer;
