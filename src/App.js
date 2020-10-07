import React, { Component } from 'react';
import Greeting from './components/Greeting';
import Login from './components/Login';
import Logout from './components/Logout';


class App extends Component {

  state = {
    isLoged: false
  }

  loginHandler = () => {
    this.setState({
      isLoged: true
    })
  }
  logoutHandler = () => {
    this.setState({
      isLoged: false
    })
  }

  render() {
    let button;
    if (this.state.isLoged) {
      button = <Logout click={this.logoutHandler} />
    }
    else {
      button = <Login click={this.loginHandler} />
    }
    return (
      <div>
        <Greeting isLoged={this.state.isLoged}></Greeting>
        { button}
      </div>
    )
  }
}

export default App;
