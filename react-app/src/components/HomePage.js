import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Portfolio from './Portfolio.js';
import Watchlist from './Watchlist.js'
import "./HomePage.css"


export default function HomePage() {

    return (
        <div id="home-container">


            <div id="homepage-left">
                <div id="homepage-chart">
                    <Stock ticker={"AMC"} />  </div>
                <br></br>
                <br></br>
                <div id="homepage-portfolio-title">Your Portfolio</div>
                <div id="homepage-portfolio"><Portfolio /></div>
            </div>


            <div id="homepage-right">
                <Watchlist />
            </div >


        </div>
    )
}
