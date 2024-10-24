
import { useState } from 'react';
import PropTypes from 'prop-types'; 
import '../App.css';
const SearchBar = ({ setActiveCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setActiveCategory(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase());
    setSearchTerm('');
  };

  return (
    <div className="searchbar">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Search movie here" 
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  setActiveCategory: PropTypes.func.isRequired, 
};

export default SearchBar;
