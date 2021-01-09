import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {

  return (

    <div class="book-section">
      <img class="book" src={props.bookImage} alt={props.title} />
      <div><h2 class="book-title">{props.title}</h2></div>
      <div><h3 class="book-author">Author: {props.author}</h3></div>
      <div><p>{props.information}</p></div>
    </div>

  )

}

export default Book;
