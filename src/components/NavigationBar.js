import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar () {

  const navStyle = {
    color: 'white'
  };

  return (

    <div>

      <nav>

        <div class="logo"><img src="images/logo.jpg" alt="logo" /></div>

        <ul>
          <Link style={navStyle} to="/"><li>Home</li></Link>
          <Link style={navStyle} to="/books"><li>Books</li></Link>
        </ul>
      </nav>

    </div>

  );

}

export default NavigationBar;