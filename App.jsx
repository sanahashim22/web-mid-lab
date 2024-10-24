

import Navbar from './components/header';
import SearchBar from './components/searchbar';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import './App.css';
import MovieItem from './components/movieitem';
import MovieList from './components/movielist';


const mockListings = {
  Fantastic: [
    {
      image: 'https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_1280.jpg',
      title: 'Fantastic',
      releaseDate: '2024',
      rating: '4.9',
      category: 'Fantastic',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2024/06/23/20/54/ai-generated-8848753_1280.jpg',
      title: 'Comedy',
      releaseDate: '2025',
      rating: '4.9',
      category: 'Fantastic',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2020/12/16/21/58/tv-5837826_1280.jpg',
      title: 'Trending',
      releaseDate: '2020',
      rating: '5.0',
      category: 'Fantastic',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_1280.jpg',
      title: 'Kids',
      releaseDate: '2022',
      rating: '4.7',
      category: 'Fantastic',
    },
  ],
  Kids:[
  
  ],
  Trending:[
    
  ],
 Comedy:[

 ],
 
 
};


function App() {
  const [activeCategory, setActiveCategory] = useState('Fantastic'); 
  const [listingsData, setListingsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const updateListings = () => {
      const listingsInCategory = mockListings[activeCategory] || [];
      const filteredListings = searchTerm
        ? listingsInCategory.filter(listing => 
            listing.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listingsInCategory;

      console.log('Filtered Listings:', filteredListings); 
      setListingsData(filteredListings);
    };

    updateListings();
  }, [activeCategory, searchTerm]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar setActiveCategory={setActiveCategory} setSearchTerm={setSearchTerm} />
      <MovieList activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="listing">
        {listingsData.map((listing, index) => (
          <MovieItem 
            key={index}
            image={listing.image}
            title={listing.title}
            releaseDate={listing.releaseDate}
            rating={listing.rating}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;