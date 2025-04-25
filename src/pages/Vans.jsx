import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = vans.map((van) => (
    <div key={van.id} className="van-title">
      <img src={van.imageUrl} width="200" alt="Image" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));
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
