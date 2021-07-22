import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./Splash.css"


export default function Splash() {

    let history = useHistory();

    return (
        <>
            <div className="splash__nav">
            </div>
            <div className="investing-for-everyone">

                <div className="investing-left">
                    <h1 className="investing-title">Investing for Everyone</h1>

                    <p className="investing-text">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>

                    <div className="investing-left-button">
                        <button className="buttons" onClick={() => history.push('/sign-up')}>
                            Sign Up
                        </button>
                    </div>
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
                    <div className="ipo-bullets">
                        <div className="ipo-bullets-icon">ICON</div>
                        <div className="ipo-bullets-text">
                            <p>It's your turn</p>
                            <span>No minimum account balances or special status requirements.</span>
                        </div>
                    </div>
                    <div className="ipo-bullets">
                        <div className="ipo-bullets-icon">ICON</div>
                        <div className="ipo-bullets-text">
                            <p>Be one of the first</p>
                            <span>Request shares in new companies before their stock starts trading on public exchanges.</span>
                        </div>
                    </div>
                    <div className="ipo-bullets">
                        <div className="ipo-bullets-icon">ICON</div>
                        <div className="ipo-bullets-text">
                            <p>Get a fair shot</p>
                            <span>While IPO shares are limited, IPO Access gives you the same opportunity to invest, regardless of order size or account value.</span>
                        </div>
                    </div>

                    <br></br>
                    <div className="disclosure"><span>❗️ IPO Access disclosure</span></div>
                </div>
            </div>


            <div className="fractional">
                <div className="fractional-left">
                    <div className="fractional-top">

                        <span className="title" >Introducing Fractional Shares</span >
                        <p>Invest in thousands of stocks with as little as $1.</p>
                    </div>
                    <div className="fractional-middle">
                        <div className="fractional-middle-1">
                            HERE
                        </div>
                        <div className="fractional-middle-1">
                            HERE
                        </div>
                        <div className="fractional-middle-1">
                            HERE
                        </div>
                        <div className="fractional-middle-1">
                            <img src="/splash-3.png" alt="confetti"></img>
                        </div>
                    </div>
                    <div className="fractional-bottom"></div>
                </div>

                <div className="disclosure"><span>❗️ Fractional Shares Disclosure</span></div>

            </div>


        </>

    )
}
