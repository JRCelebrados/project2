import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Books from './components/Books';
import Bible from './components/books/Bible';
import Genesis from './components/books/bibleBooks/Genesis';
import Genesis1 from './components/books/bibleBooks/GenesisChapters/Genesis1';

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
            <Route path="/bible" component={Bible} />
            <Route path="/genesis" component={Genesis} />
            <Route path="/genesis1" component={Genesis1} />
          </Switch>

        </div>

      </Router>

    );
  }

}

export default App;
