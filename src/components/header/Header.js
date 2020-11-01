import React, { Component } from 'react'
import GetGithub from '../getGithub/GetGithub'
//import logo from './logo.png'
import './header.scss'
//import Social
import Social from './../social/Social';

class Header extends Component {
  render () {
    return (
      <div className='header text-center text-light'>
        <GetGithub />
        <h1> I AM MOHAMED FAWZI,</h1>
        <h2> Front End Developer</h2>
        <Social />
      </div>
    )
  }
}

export default Header
