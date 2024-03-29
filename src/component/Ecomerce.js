import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Ecomerce = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setproduct(data);
    };
    fetchdata();
  }, []);
 
  return (
    <div style={{ width: "80%", marginLeft: "10%", border: "2px solid red" }}>
      <div className="row">
        {product.map((e,id) => {
          return (
            <div
              className="card"  key={id}
              style={{ width: "18rem", marginLeft: "20px",marginTop:"20px", }}
            >
              <img 
                style={{marginTop:"10px", height: "250px", width: "100%"  }}
                src={e.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">Price={e.price}$</p>
                <p className="card-text">Rating={e.rating.rate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ecomerce;
