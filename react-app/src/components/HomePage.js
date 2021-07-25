import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Portfolio from './Portfolio.js';
import Watchlist from './Watchlist.js'
import "./Homepage.css"


export default function Homepage() {

    return (
        <div id="home-container">


            <div id="homepage-left">
                <div style={{"height":"400px"}}><Stock ticker={"SPY"} /></div>
                <br></br>
                <br></br>
                <div id="homepage-portfolio"><Portfolio /></div>
            </div>


            <div id="homepage-right">
                <Watchlist />
            </div >


        </div>
    )
}
