import React, { useState, useEffect } from 'react';

const Fetcjdata = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('titanic');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=454d37&s=${query}`);
        const data = await response.json();

        // Check if the response has the 'Search' property
        if (data.Search) {
          setMovies(data.Search);
          
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <h2>Movie List</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetcjdata;
