import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appcontext } from "../context/context";
import Search from "./Search";
import Spiner from "../Spiner";
const Home = () => {
  const { movies ,loading} = useContext(appcontext);
  console.log(movies)
  return (
<>
    <Search/>
    <div className="container home">
      
       {
       
        movies.map((e) => {
          const title=e.Title.substring(0,15);
         
          return (
            <Link to={`movi/${e.imdbID}`}>
            <div className="card text-dark">
            <p style={{fontWeight:"bold",marginTop:"10px",textAlign:"center"}}>{title.length<15?`${title}`:`${title}...`}</p>
            <img src={e.Poster} alt="" srcset="" />
           
            </div>
            </Link>
          );
        })
       }
     
    </div>
    </>
  );
};

export default Home;
