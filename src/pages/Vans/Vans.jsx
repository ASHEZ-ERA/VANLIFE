import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = vans.map((van) => {
    return (
      <div key={van.id} className="van-title">
        <Link
          to={`/vans/${van.id}`}
          style={{ textDecoration: "none", color: "black" }}
          aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
        >
          <img src={van.imageUrl} width="200" style={{borderRadius: "5px"}} alt={`Image of ${van.name}`} />
          <div className="van-info">
            <h2>{van.name}</h2>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    );
  });
  console.log(vans);
  return (
    <>
      <div className="van-list-container">
        <h1>Explore our Van collections </h1>
        <div className="van-list">{displayVans}</div>
      </div>
    </>
  );
}
