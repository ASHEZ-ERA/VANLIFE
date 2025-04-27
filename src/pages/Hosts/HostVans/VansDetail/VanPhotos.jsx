import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPhotos(){
        const {HostVanDetail} = useOutletContext()
    
    return(
        <>
        <img src={HostVanDetail.imageUrl} className="host-van-detail-image"/>
        </>
    )
}