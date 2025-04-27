import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const [vanData, setVanData] = useState(null);
  const params = useParams();
  // console.log(params)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, [params.id]);

  console.log(vanData);
  return (
    <div className="van-detail-container">
      {vanData ? (
        <div className="van-detail">
          <img src={vanData.imageUrl} alt="Van image" />
          <i className={`van-type ${vanData.type} is selected`}>
            {vanData.type}
          </i>
          <h2>{vanData.name}</h2>
          <p className="van-price">
            <span>${vanData.price}</span>/day
          </p>
          <p>{vanData.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2> Loading...</h2>
      )}
    </div>
  );
}
