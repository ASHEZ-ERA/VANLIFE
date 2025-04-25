import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/van2.jpg";

export default function Home() {
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.46), rgba(0,0,0,0.46)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>You got the plans, we got the means of executing those plans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your Van!</Link>
      </div>
    </>
  );
}
