import React from 'react';
import { Link } from 'react-router-dom';

function TaleOfTwoCities() {
  return (

    <div class="container">

      <h1>A Tale of Two Cities</h1>
      <h2>By Charles Dickens</h2>

      <div>
        <div class="chapters">
          <Link to="/taleOfTwoCities1"><li>1</li></Link>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </div>
      </div>

    </div>

  );
}

export default TaleOfTwoCities;
