import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Books from './components/Books';

class App extends React.Component {

  render() {
    return (

      <Router>

        <div>

          <header>

          <NavigationBar />

          </header>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
          </Switch>

        </div>

      </Router>

    );
  }

}

export default App;
