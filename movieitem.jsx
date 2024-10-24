
import PropTypes from 'prop-types'; 
import '../App.css';

const MovieItem = ({ image, title, releaseDate,rating }) => {
  return (
    <div className="list">
      <img src={image} alt={title} className="property-image" />
      <div className="property-info">
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,

};

export default MovieItem;
