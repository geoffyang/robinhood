import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Splash.css"


export default function Splash() {

    return (
        <>
            <div className="splash__nav">
            </div>
            <div className="investing-for-everyone">

                <div className="investing-left">
                    <h1 className="investing-title">Investing for Everyone</h1>

                    <p className="investing-text">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>

                    <div className="investing-left-button">Button Placeholder</div>
                    <br></br>
                    <div className="disclosure"><span >❗️ Commissions & Free Stock Disclosures</span></div>
                </div>

                <div className="investing-right">
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
                    <span className="title" >Introducing IPO Access</span >

                    <p>Get in at the IPO price. Now, you can become one of the first public investors in upcoming IPOs.</p>
                    <p>〄 It's your turn</p>
                    <p>㉿ Be one of the first</p>
                    <p>〶 Get a fair shot</p>

                    <br></br>
                    <div className="disclosure"><span>❗️ IPO Access disclosure</span></div>
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
