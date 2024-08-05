import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
      <ul class="footer-links">
        <li><a href="https://github.com/prar1hana">GitHub</a></li>
        <li><a href="https://www.instagram.com/prarthanaphukan_/">Instagram</a></li>
        <li><a href="mailto:prarthanaphukan19@gmail.com">E-mail</a></li>
        <li><a href="https://www.linkedin.com/in/prarthana-phukan-464023278/">LinkedIn</a></li>
      </ul>
      </span>
    </footer>
  );
};

export default Footer;
