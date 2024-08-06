import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Avatar', description: 'A mind-bending thriller', image: "https://ln.run/seMrZ", rating: 5 },
    { title: 'Black Panther', description: 'A sci-fi classic', image: "https://ln.run/6jq2b", rating: 4 },
    // Add more movies if needed
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: 'New Movie',
            description: 'Description of the new movie',
            image: "https://ln.run/qQjJ5",
            rating: 3,
          })
        }
      >
        Add Movie
      </button>
    </div>
  );
};

export default App;