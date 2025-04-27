import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);
 console.log(hostVans)
   const displayHostVans = hostVans.map(van => 
   <Link to={`/host/vans/${van.id}`}
    key={van.id}
    className="host-van-link-wrapper">

   <div className="host-van-single" key={van.id}><img src={van.imageUrl} alt={`photo of ${van.name}`}/> <div className="host-van-info"><h3>{van.name} <p>${van.price}/day</p></h3></div> </div>
   </Link>)
  return (
    <>
      <section>
        <h1 className="host-vans-title"> Your Listed Vans</h1>
        <div className="host-vans-list">{displayHostVans}</div>
      </section>
    </>
  );
}
