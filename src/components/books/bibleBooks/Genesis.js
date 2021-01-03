import React from 'react';
import { Link } from 'react-router-dom';

function Genesis() {

  const listStyle = {
    textDecoration: 'none',
  };

  return (

    <div class="container">

      <h1>The Book of Genesis</h1>

      <div class="chapters">
        <Link style={listStyle} to="/genesis1"><li>1</li></Link>
        <Link style={listStyle} to="/genesis2"><li>2</li></Link>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </div>

    </div>

  );
}

export default Genesis;
