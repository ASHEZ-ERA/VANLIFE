import React from 'react'
import bgImg from "../assets/images/van-home.jpg"
import { Link } from 'react-router-dom'
export default function About(){
    return(
        <>
        <div className='about-page-container'>
            <img src={bgImg} className='about-van-home' />
            <div className='about-page-content'>
                <h1>Don't sqeeze in a sedan when you can relax in a van</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are reertifies before each trip to ensure your travel plans can go off without a hitch. (BTW hitch costs extra 😉)</p>
                <p>Our team is full of Vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className='about-page-cta'>
                <h2>Your destination is waiting. <br/> You're Van is ready</h2>
                <Link className='link-button' to='/vans'>Explore the Vans</Link>
            </div>
        </div>
        </>
    )
}