import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/Milan.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Milan Sharma</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is Pokedex app which gives information about Pokemon.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Milan-Sharma-449">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/milansharma_449/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/milansharma449">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/milansharma449">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
