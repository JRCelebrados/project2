import React from 'react';
import {FaSearch} from 'react-icons/fa';

const SearchBar = ({keyword, setKeyword}) => {

    const BarStyling = {width: "20rem", background: "#F2F1F9", border: "none", padding: "0.4rem", borderRadius: "5px 0px 0px 5px"};
    const ButtonStyling = {background: "rgb(0, 0, 128)", color: "white", border: "none", borderRadius: "0px 5px 5px 0px"};

    return (
        <div>
          <input
            style = {BarStyling}
            key="random1"
            value={keyword}
            placeholder={"search book"}
            onChange={(e) => setKeyword(e.target.value)} />
          <button style={ButtonStyling} className="search-button" type="submit"><FaSearch /></button>
        </div>
    );
}

export default SearchBar;
