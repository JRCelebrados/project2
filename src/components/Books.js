import React, { Component } from 'react';

class Books extends React.Component {

  render() {

    return (

      <div class="container">

        <h1>Featured Books</h1>

        <div class="book-section">
          <img class="book" src="images/book1.png" />
          <div class="book-information">
            <h2 class="book-title">The Holy Bible: King James Version</h2>
            <h3 class="book-author">Author: N/A</h3>
            <div class="book-description">The bestselling book of all time!</div>
          </div>
        </div>

      </div>

    );

  }

}

export default Books;
