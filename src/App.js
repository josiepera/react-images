import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImageList from './ImageList';
import ImageSingle from './ImageSingle';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ImageList} />
          <Route exact path="/:id" component={ImageSingle} />
        </Switch>
      </Router>
    );
  }
}

export default App;
