import React, { Component } from 'react'
import Header from './components/header/Header'
import GetFacebook from './components/getFacebook/GetFacebook'

import './App.scss'
// import bootstrap 
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Header hrefPath='My Home' />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-2'>
              <GetFacebook />
            </div>
            <div class='col-sm-2'>
            <a class="twitter-timeline" href="https://twitter.com/home?ref_src=twsrc%5Etfw">Tweets by home</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
