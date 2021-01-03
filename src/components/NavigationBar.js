import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Search_comps/SearchBar';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100 ) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['navbar'];
  if (scrolled) {
    x.push('scrolled');
  }

  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (

    <div>

      <nav className={x.join(' ')}>

        <div class="logo"><img src="images/logo.jpg" alt="logo" /></div>

        <ul>
          <Link style={navStyle} to="/"><li>Home</li></Link>
          <Link style={navStyle} to="/books"><li>Books</li></Link>
        </ul>
        <div>
          <SearchBar />
        </div>
      </nav>

    </div>

  );

}

export default NavigationBar;
