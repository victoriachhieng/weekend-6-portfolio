import React, { Component } from 'react';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage';
import {HashRouter as Router, Route} from 'react-router-dom';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={ProjectPage}/>
        <Route path="/admin" component={Admin}/>
      </div>
      </Router>
    );
  }
}

export default App;
