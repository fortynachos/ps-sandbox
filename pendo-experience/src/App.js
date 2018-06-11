import React, { Component } from 'react';
import FinalNavigation from './containers/navigation/navigationContainer.js';
import FinalBody from './containers/body/bodyContainer.js'
import './App.css';
import { Icon } from 'antd';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<FinalNavigation />
      	<FinalBody />
        <div className="pendo-sales-engineering-footer">
          <p>Made with <span><Icon type="heart" className='heart'/></span> by Pendo Sales Engineering</p>
        </div>
      </div>
    );
  }
}

export default App;
