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

    const linkStyle = {
      textDecoration: 'none',
    };

    return (

      <div class="container">

        <h1>Featured Books</h1>

        <Link style={linkStyle} to="/bible"><Book bookImage={BibleKJVImage} title="The Holy Bible: King James Version" author="N/A"
          information="The King James Version (KJV), also known as the King James Bible (KJB), sometimes as the English version of 1611, or simply the
          Authorized Version (AV), is an English translation of the Christian Bible for the Church of England, commissioned in 1604 and completed as well
          as published in 1611 under the sponsorship of James VI and I. The books of the King James Version include the 39 books of the Old Testament, an
          intertestamental section containing 14 books of the Apocrypha, and the 27 books of the New Testament." /></Link>
        <Link to="/taleOfTwoCities"><Book bookImage={TaleOfTwoCitiesImage} title="A Tale of Two Cities" author="Charles Dickens" /></Link>
        <Book bookImage={LOTRimage} title="The Lord of the Rings" author="J.R.R. Tolkien" />
        <Book bookImage={LesMisImage} title="Les Miserables" author="Victor Hugo" />

      </div>

    );

  }

}

export default Books;
