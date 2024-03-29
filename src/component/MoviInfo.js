import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spiner from "../Spiner";
const MoviInfo = (props) => {
  const { id } = useParams();
  const [movies, setMovies] = useState("");
  const [loading,setloading]=useState(true)
    useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=454d37&i=${id}`
        );
        const data = await response.json();
        setMovies(data);
        setloading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };
    fetchMovies();
  }, [id]);


 const navigate=useNavigate()
  return (
  <>
    { loading?
   <Spiner/>:
    <div className=" movi_info" >
      
      <img
        src={movies.Poster}
        alt=""
        srcset=""
        
      />
      <h4>{movies.Title}</h4>
      <p>{movies.Released}</p>
      <p>{movies.imdbRating}/10</p>
      <p>{movies.Country}</p>
      <p>{movies.Genre}</p>
      <p>{movies.Actors}</p>
      <button onClick={()=>navigate("/")} style={{fontWeight:'bold'}}>Go Back</button>
      
    </div> 
    }
  </>
  );
};

export default MoviInfo;
