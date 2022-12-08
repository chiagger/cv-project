import "normalize.css/normalize.css";
import './App.css';
import React, { Component } from 'react';
import General from './components/general';
import Education from './components/education'
import Experience from './components/experience';
import General2 from './components/general2'




class App extends Component {

  render() {
    return (
      <div className="page">
        <div className="layout">
          <div className="top">
            <General></General>
          </div>
          <div className="bottom">
            <div className="left">
              <General2></General2>
            </div>
            <div className="right">
              <Experience></Experience>
              <Education></Education>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
