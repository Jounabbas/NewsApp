import { createContext, useEffect, useState } from "react";

export const appcontext = createContext();

const Appprovider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setquery] = useState("lovely");
  const [loading,setloading]=useState(true)
  useEffect(() => { 
    setTimeout(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=454d37&s=${query}`
          );
          const data = await response.json();
            setloading(false)
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchMovies();
 
    }, 1000);
  }, [query]);

  return (
    <appcontext.Provider value={{ movies, query, setquery,loading }}>
      {children}
    </appcontext.Provider>
  );
};
export default Appprovider;
