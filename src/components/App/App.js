import React, { Component } from 'react';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <ProjectPage/>
      </div>
    );
  }
}

export default App;
