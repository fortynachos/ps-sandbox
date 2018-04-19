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
        <div className="pendo-sales-engineering-footer">
          <span>Made with love by Pendo Sales Engineering</span>
        </div>
      </div>
    );
  }
}

export default App;
