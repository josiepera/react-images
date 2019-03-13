import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImageList from './ImageList'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ImageList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
