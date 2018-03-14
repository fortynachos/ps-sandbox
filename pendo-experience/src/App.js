import React, { Component } from 'react';
import Navigation from './navigation/nav.js';
import Body from './body/body.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navigation />
      	<Body />
      </div>
    );
  }
}

export default App;
