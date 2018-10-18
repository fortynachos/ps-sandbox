import React, { Component } from 'react';
import FinalNavigation from './containers/navigation/navigationContainer.js';
import FinalBody from './containers/body/bodyContainer.js';
import './App.css';

class App extends Component {
    render () {
        document.addEventListener('keyup', (e) => {
            if (e.ctrlKey && e.keyCode === 76) {
                window.pendo.showGuideById('kp8lRQSArHUW79IzqloeIBatViI');
            }
        }, false);

        return (
            <div className="App">
                <FinalNavigation />
                <FinalBody />
            </div>
        );
    }
}

export default App;
