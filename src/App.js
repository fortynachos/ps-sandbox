import React, { Component } from 'react';
import FinalNavigation from './containers/navigation/navigationContainer.js';
import FinalBody from './containers/body/bodyContainer.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<FinalNavigation />
      	<FinalBody />
      </div>
    );
  }
}

export default App;
