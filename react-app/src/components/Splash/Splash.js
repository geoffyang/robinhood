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
                    <p>Investing for Everyone</p>
                    <p>Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                    <div className="body__left-button">Button Placeholder</div>
                    <p>Commissions & Free Stock Disclosures</p>
                </div>
                <div className="body__right">
                </div>

            </div>

        </>

    )
}
