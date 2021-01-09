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
        <Link style={linkStyle} to="/taleOfTwoCities"><Book bookImage={TaleOfTwoCitiesImage} title="A Tale of Two Cities" author="Charles Dickens"
          information="A Tale of Two Cities, or by its full title A Tale of Two Cities: A Story of the French Revolution,  is an 1859 historical novel by
          Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his
          18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, whom he had never met. The story
          is set against the conditions that led up to the French Revolution and the Reign of Terror." /></Link>
        <Book bookImage={LOTRimage} title="The Lord of the Rings" author="J.R.R. Tolkien"
          information="The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the
          world at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into
          a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150
          million copies sold."/>
        <Book bookImage={LesMisImage} title="Les Miserables" author="Victor Hugo"
          information="Les Miserables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels
          of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title. However, several alternatives
          have been used, including The Miserables, The Wretched, The Miserable Ones, The Poor Ones, The Wretched Poor, The Victims and The Dispossessed.
          Beginning in 1815 and culminating in the 1832 June Rebellion in Paris, the novel follows the lives and interactions of several characters,
          particularly the struggles of ex-convict Jean Valjean and his experience of redemption." />

      </div>

    );

  }

}

export default Books;
