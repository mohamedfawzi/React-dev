import React, { Component } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

class Social extends Component {
  state = {
    linkedin: "https://www.linkedin.com/in/mohamed-fawzi-abdel-hameed-753425111/",
    facebook: "https://www.linkedin.com/in/mohamed-fawzi-abdel-hameed-753425111/",
    twitter: "https://www.linkedin.com/in/mohamed-fawzi-abdel-hameed-753425111/",
    github: "https://www.linkedin.com/in/mohamed-fawzi-abdel-hameed-753425111/",
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href={this.state.linkedin}>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={this.state.facebook}>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href={this.state.twitter}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={this.state.github}>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
