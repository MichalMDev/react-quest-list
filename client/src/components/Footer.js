import React from "react";
// import '../text-area-resize.js';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© Reminder App 2019</p>
      <p>
        Feedback: <mail>mail@mail.com</mail>
      </p>
      Font generated by <a href="https://www.flaticon.com">flaticon.com</a>.{" "}
      <p>
        Under <a href="http://creativecommons.org/licenses/by/3.0/">CC</a>:{" "}
        <a
          data-file="001-delete"
          href="https://www.flaticon.com/authors/kiranshastry"
        >
          Kiranshastry
        </a>
        ,{" "}
        <a
          data-file="005-plus"
          href="https://www.flaticon.com/authors/smashicons"
        >
          Smashicons
        </a>
        ,{" "}
        <a data-file="004-user" href="https://www.flaticon.com/authors/srip">
          srip
        </a>
        ,{" "}
        <a data-file="007-about-us" href="http://www.freepik.com">
          Freepik
        </a>
      </p>
    </div>
  );
};

export default Footer;
