import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import SearchBar from './Search_comps/SearchBar';
import Book from './Book';
import BibleKJVImage from '../bookImages/BibleKJV.png';
import TaleOfTwoCitiesImage from '../bookImages/TaleOfTwoCities.jpg';
import LOTRimage from '../bookImages/LOTR.jpg';
import LesMisImage from '../bookImages/LesMis.jpg';

class Books extends React.Component {

  render() {

    return (

      <div class="container">

        <h1>Featured Books</h1>

        <Link to="/bible"><Book bookImage={BibleKJVImage} title="The Holy Bible: King James Version" author="N/A" /></Link>
        <Book bookImage={TaleOfTwoCitiesImage} title="A Tale of Two Cities" author="Charles Dickens" />
        <Book bookImage={LOTRimage} title="The Lord of the Rings" author="J.R.R. Tolkien" />
        <Book bookImage={LesMisImage} title="Les Miserables" author="Victor Hugo" />

      </div>

    );

  }

}

export default Books;
