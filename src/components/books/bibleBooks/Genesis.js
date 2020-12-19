import React from 'react';
import { Link } from 'react-router-dom';

function Genesis() {
  return (

    <div class="container">

      <h1>The Book of Genesis</h1>

      <div class="chapters">
        <Link to="/genesis1"><li>1</li></Link>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </div>

    </div>

  );
}

export default Genesis;
