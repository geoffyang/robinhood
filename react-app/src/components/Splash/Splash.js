import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./Splash.css"


export default function Splash() {

    let history = useHistory();
    const types = ["Customize", "Manage", "Learn"]
    const [active, setActive] = useState(types[0])

    // const downCaret = (<svg><path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"></path></svg>)

    return (
        <>
            <div className="splash__nav">
                <div id="logo-div">
                    <img src='https://robinhood-aa.s3.amazonaws.com/robinhood-logo.png' alt="logo"></img></div>
                <div id="splash-nav-dropdowns">
                    <button>Products ⌄</button>
                    <button>Learn ⌄</button>
                    <button>Support ⌄</button>
                    <button>Who we are ⌄</button></div>
                <div id="splash-nav-buttons">
                    <button className="buttons" id="login" onClick={() => history.push('/login')}>
                        Log In
                    </button>
                    <button className="buttons" id="signup"  onClick={() => history.push('/sign-up')}>
                        Sign Up
                    </button>
                </div>
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
                    <div className="crop"></div>
                    <img src="https://robinhood-aa.s3.amazonaws.com/splash-1.gif" alt="phone"></img>
                </div>
            </div>


            <div className="body__fee-disclosure">
                <span>See our fee schedule to learn more about cost.</span>
            </div>


            <div className="ipo">
                <div className="ipo__left">
                    <img src="https://robinhood-aa.s3.amazonaws.com/splash-2.png" alt="airdrop"></img>
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
                            <div className="fractional-text">
                                <p>Invest Any Amount</p>
                                <span>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</span>
                            </div>
                        </div>
                        <div className="fractional-middle-1">
                            <div className="fractional-text">
                                <p>Build a Balanced Portfolio</p>
                                <span>Customize your portfolio with pieces of different companies and funds to help reduce risk.</span>
                            </div>
                        </div>
                        <div className="fractional-middle-1">
                            <div className="fractional-text">
                                <p>Trade in Real Time</p>
                                <span>Trades placed during market hours are executed at that time, so you’ll always know the share price.</span>
                            </div>
                        </div>
                        <div className="fractional-middle-4">
                            <img src="https://robinhood-aa.s3.amazonaws.com/splash-3.png" alt="confetti"></img>
                        </div>
                    </div>
                    <div className="fractional-bottom"></div>
                </div>
                <br></br>
                <br></br>
                <div className="disclosure"><span>❗️ Fractional Shares Disclosure</span></div>
            </div>

            <div className="tabs">

                <div className="tabs-left">
                    {types.map(type => {
                        return (
                            <button className="tabButton"
                                key={type}
                                autoFocus
                                onClick={() => setActive(type)}
                            >
                                {type}
                            </button>
                        )
                    })}
                </div>

                <PhoneImage whichImage={active} />

            </div>

        </>

    )
}


function PhoneImage({ whichImage }) {
    whichImage = `https://robinhood-aa.s3.amazonaws.com/${whichImage}.png`
    let title, text;

    switch (whichImage) {
        case '/Learn.png':
            title = "Learn As You Grow"
            text = "Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have)."
            break;
        case "/Manage.png":
            title = "Manage Your Portfolio"
            text = "Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app."
            break;
        case "/Customize.png":
            title = "Keep Tabs on Your Money"
            text = "Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you."
            break;
        default:
            title = "Learn As You Grow"
            text = "Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have)."
    }

    return (
        <div className="tabs-right">
            <div className="phone-screen">
                <img src={whichImage} alt="phoneScreen"></img>
            </div>
            <div className="tabs-right-text">
                <p>{title}</p>
                <br></br>
                <span>{text}</span>
            </div>
        </div>
    )

}
