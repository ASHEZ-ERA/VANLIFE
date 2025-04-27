import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPricing(){
    const {HostVanDetail} = useOutletContext()
    return(
        <>
        <h3 className="host-van-price">${HostVanDetail.price}<span>/day</span></h3>
        </>
    )
}