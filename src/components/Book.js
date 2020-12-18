import React from 'react';

const Book = (props) => {

  return (
    <div class="book-section">
      <img class="book" src={props.bookImage} alt={props.title} />
      <div class="book-information">
        <h2 class="book-title">{props.title}</h2>
        <h3 class="book-author">Author: {props.author}</h3>
        <div class="book-description">{props.information}</div>
      </div>
    </div>
  )

}

export default Book;
