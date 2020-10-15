import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: null
  }

componentDidMount() {
  axios.get('http://localhost: 5000')
  .then((response) => {
    this.setState({
      data: response.data
    })
  })
}


  render() {
    return (
      <div className='App'>
        <header className="App-header">
          Sports
        </header>
        {this.state.data}
      </div>
    );
  }
}

export default App;