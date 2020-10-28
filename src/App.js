import React, { Component } from 'react';
import Header from './components/header/Header';
import GetFacebook from './components/getFacebook/GetFacebook';
//import bootstrap 
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header hrefPath = "My Home" />
        <GetFacebook />

      </div>
    );
  }
}

export default App;
