import React, { Component } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import './social.scss';

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
        <ul className='social list-unstyled'>
          <li className='socialItem float-left m-2'>
            <a href={this.state.linkedin}>
              <FaLinkedin size={50}/>
            </a>
          </li>
          <li className='socialItem float-left m-2'>
            <a href={this.state.facebook}>
              <FaFacebook size={50}/>
            </a>
          </li>
          <li className='socialItem float-left m-2'>
            <a href={this.state.twitter}>
              <FaTwitter size={50}/>
            </a>
          </li>
          <li className='socialItem float-left m-2'>
            <a href={this.state.github}>
              <FaGithub size={50}/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
