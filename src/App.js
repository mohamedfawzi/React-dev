import React, {Component} from 'react';
import Header from './components/Header';


class App extends Component{

  state = {
    name: 'App Component',
    header: [
      {title: 'This Is Header', content: 'Header Content'}
    ]
  }

  changeName = () => {
    this.setState({
      name: 'React App',
      header: [
        {title: 'This Is updated Header', content: 'Header updated Content'}
      ]
    });
  }
  render(){
    return(
      <div className='App'>
        <p>{this.state.name}</p>
        <Header title={this.state.header[0].title} content={this.state.header[0].content}></Header>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}

export default App;
