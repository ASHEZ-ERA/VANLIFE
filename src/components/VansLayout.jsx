import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>

      <NavLink className={({ isActive }) => isActive ? activeStyles : null} to=".">Details</NavLink>
      <NavLink className={({ isActive }) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
      <NavLink className={({ isActive }) => isActive ? activeStyles : null} to="photos">Photos</NavLink>
      <Outlet/>
    </>
  );
}