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
            <div className='col-sm-3'>
              <GetFacebook />
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App
