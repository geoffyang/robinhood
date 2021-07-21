import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Splash.css"


export default function Splash() {

    return (
        <>
            <div className="splash__nav">
            </div>
            <div className="splash__body">

                <div className="body__left">
                    <h1 className="body__left-title">Investing for Everyone</h1>
                    <p>Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                    <div className="body__left-button">Button Placeholder</div>
                    <br></br>
                    <span>Commissions & Free Stock Disclosures</span>
                </div>
                <div className="body__right">
                    <img src="/splash-1.jpg" alt="phone"></img>
                </div>

            </div>

        </>

    )
}
