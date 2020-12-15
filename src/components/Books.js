import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Books extends React.Component {

  render() {

    return (

      <div class="container">

        <h1>Featured Books</h1>
        <div className="App">
        <SearchBar />
        </div>
        <div className="book-section">
          <img class="book" src="images/book1.png" />
          <div class="book-information">
            <h2 class="book-title">The Holy Bible: King James Version</h2>
            <h3>Author: N/A</h3>
            <div class="book-description">The bestselling book of all time!</div>
          </div>
        </div>

        <div className="book-section">
          <img class="book" src="images/book2.jpg" />
          <div class="book-information">
            <h2 class="book-title">A Tale of Two Cities</h2>
            <br/>
            <h3 >Author: Charles Dickens</h3>
            <div class="book-description">
              A Tale of Two Cities is an 1859 historical novel by Charles Dickens, 
              set in London and Paris before and during the French Revolution. 
              The novel tells the story of the French Doctor Manette, 
              his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, 
              whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror. 
              </div>
          </div>
        </div>

      </div>

    );

  }

}

export default Books;
