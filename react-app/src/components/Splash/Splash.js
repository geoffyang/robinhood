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
                    <span className="disclosure">Commissions & Free Stock Disclosures</span>
                </div>
                <div className="body__right">
                    <img src="/splash-1.gif" alt="phone"></img>
                </div>
            </div>
            <div className="body__fee-disclosure">
                <span>See our fee schedule to learn more about cost.</span>
            </div>


            <div className="ipo">
                <div className="ipo__left">
                    <img src="/splash-2.png" alt="airdrop"></img>
                </div>
                <div className="ipo__right">
                    <h1 className="body__left-title">Introducing IPO Access</h1>

                    <p>Get in at the IPO price. Now, you can become one of the first public investors in upcoming IPOs.</p>
                    <p>〄 It's your turn</p>
                    <p>㉿ Be one of the first</p>
                    <p>〶 Get a fair shot</p>

                    <br></br>
                    <span className="disclosure">❗️ IPO Access disclosure</span>
                </div>
            </div>

            <div className="fractional">
                <div className="fractional__left">
                    <div className="fractional__top">
                        <img src="/splash-3.png" alt="confetti"></img>
                        Introducing Fractional Shares
                        Invest in thousands of stocks with as little as $1.
                    </div>
                    <div className="fractional__middle">
                        <div className="fractional__middle-1"></div>
                        <div className="fractional__middle-1"></div>
                        <div className="fractional__middle-1"></div>
                    </div>
                    <div className="fractional__bottom"></div>
                </div>
                <div className="fractional__right"></div>
            </div>


        </>

    )
}
