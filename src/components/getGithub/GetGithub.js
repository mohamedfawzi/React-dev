import React, { Component } from 'react'
import GithubCorner from 'react-github-corner'
export default class GetGithub extends Component {
  render () {
    return (
      <div>
        <GithubCorner
          href='https://github.com/mohamedfawzi'
          bannerColor='#FD6C6C'
          octoColor='#fff'
          size={80}
          direction='right' />
      </div>
    )
  }
}
