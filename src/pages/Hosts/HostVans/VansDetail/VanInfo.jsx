import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanInfo(){
        const {HostVanDetail} = useOutletContext()
    

    return (
      <section className="host-van-detail-info">
        <h4>
          Name: <span>{HostVanDetail.name}</span>
        </h4>
        <h4>
          Category: <span>{HostVanDetail.type}</span>
        </h4>
        <h4>
          Description: <span>{HostVanDetail.description}</span>
        </h4>
        <h4>
          Visibility: <span>Public</span>
        </h4>
      </section>
    );
}