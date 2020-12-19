import React from 'react';
import { Link } from 'react-router-dom';

function BookExample() {
  return (

    <div class="container">

      <h1>The Holy Bible: King James Version</h1>

      <div class="bible-books">
        <Link to="/genesis"><li>Genesis</li></Link>
        <li>Exodus</li>
        <li>Leviticus</li>
        <li>Numbers</li>
        <li>Deuteronomy</li>
      </div>

    </div>

  );
}

export default BookExample;
