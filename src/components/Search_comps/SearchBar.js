import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <div>
        <input 
        style = {BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search book"}
        onChange={(e) => setKeyword(e.target.value)} />
        <button className="search-button" type="submit">Search</button>
        </div>
    );
}

export default SearchBar;