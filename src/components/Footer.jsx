import React from "react";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <a href="https://www.instagram.com/shantanu__dutta/" class="connect">
        Instagram
      </a>
      <a href="https://github.com/Shantanu-Meta" class="connect">
        Github
      </a>
      <p>Copyright @{year}.All rights reserved</p>
    </footer>
  );
}

export default Footer;
