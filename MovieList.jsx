
import PropTypes from 'prop-types';
import '../App.css';

const MovieList = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { name: 'Fantastic', logo: 'https://cdn-icons-png.flaticon.com/128/3507/3507102.png' },
    { name: 'Kids', logo: 'https://cdn-icons-png.flaticon.com/128/2950/2950921.png' },
    { name: 'Trending', logo: 'https://cdn-icons-png.flaticon.com/128/5029/5029053.png' },
    { name: 'comedy', logo: 'https://cdn-icons-png.flaticon.com/128/10609/10609073.png' },
 
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name); 
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <a 
          key={category.name} 
          href="#" 
          className={`category-card ${activeCategory === category.name ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); handleCategoryClick(category); }} 
        >
          <img src={category.logo} alt={category.name} className="list-logo" />
          <p>{category.name}</p>
        </a>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  activeCategory: PropTypes.string.isRequired, 
  setActiveCategory: PropTypes.func.isRequired,
};

export default MovieList;
