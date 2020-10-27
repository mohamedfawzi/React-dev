import React, { Component } from 'react';
import Header from './components/header/Header';
//import bootstrap 
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header hrefPath = "My Home" />

      </div>
    );
  }
}

export default App;
