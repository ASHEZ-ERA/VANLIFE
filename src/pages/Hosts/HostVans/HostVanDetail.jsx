import React from "react";
// import { Outlet } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HostVanDetails() {
    const activeStyles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616",
    };

  const params = useParams();
  const [HostVanDetail, setHostVansDetail] = React.useState(null);

  React.useEffect(() => {
    async function fetchHostVanDetails() {
      const res = await fetch(`/api/host/vans/${params.id}`);
      const data = await res.json();
      setHostVansDetail(data.vans[0]);
    }
    fetchHostVanDetails();
  }, [params.id]);
  console.log(HostVanDetail);

  if (!HostVanDetail) {
    return <h2>Loading...</h2>;

    

  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={HostVanDetail.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${HostVanDetail.type}`}>
              {HostVanDetail.type}
            </i>
            <h3>{HostVanDetail.name}</h3>
            <h4>${HostVanDetail.price}/day</h4>
          </div>
        </div>
      </div>
      <nav className="host-van-detail-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="photos"
        >
          Photos
        </NavLink>
    
      </nav>
      <Outlet context={{ HostVanDetail}}/>
    </section>
  );
}
