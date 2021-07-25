import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleStock } from '../store/stocksStore';
import { useParams } from "react-router-dom";
import "./Asset.css"

export default function Asset() {

    let { ticker } = useParams();
    ticker = ticker.toUpperCase()

    const dispatch = useDispatch();
    const stock = useSelector(state => state.stocks[ticker])
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        (async () => {
            await dispatch(getSingleStock(ticker))
        })();
    }, [dispatch, ticker])

    const newsArray = [1, 2, 3]

    return (
        <div id="mega-container">
            <div id="asset-container" >
                <div id="chart" ><h1>CHART PLACEHOLDER</h1>
                    <div>{stock?.ticker}</div>
                    <div>{stock?.shortName}</div>
                    <div>{stock?.currentPrice}</div>
                    <div>{stock?.percentText}</div>
                </div>
                <div className="titles">About</div >
                <div id="company-description">
                    {stock?.companyDescription.slice(0, 500)} <span style={{ "color": "rgb(0,200,5)", "font-weight": "700" }}>Read More</span>
                    <br></br>
                    <br></br>

                </div>
                <div className={"about"}>
                    <div><p>Top Holder</p><span>{stock?.holder0}</span></div>
                    <div><p>Headquarters</p><span>{stock?.companyAdress.slice(0, 11)}</span></div>
                    <div><p>YTD Price</p><span>{stock?.percentTextYear}</span></div>
                    <div><p>Analyst Score</p><span>{stock?.tradeWords}</span></div>
                </div>
                <div className="titles">Key Statistics</div >
                <div className={"key-statistics"}>
                    <div><p>Market Cap</p><span>{stock?.marketCap.toString().slice(0, 3)}M</span></div>
                    <div><p>Price-Earnings Ratio</p><span>38.94</span></div>
                    <div><p>Dividend Yield</p><span>0.77</span></div>
                    <div><p>Average Volume</p><span>27.24M</span></div>
                </div >

                <div className="titles">News</div >
                <div id="news-container">
                    {newsArray.map(id => {
                        return (
                            <div className={"news-div"} key={`news${id}`}>
                                <span style={{ "font-size": "13", "font-weight": "500" }}>{stock?.[`newsSource${id}`]} </span>

                                <span style={{ "font-size": "13", "font-weight": "400", "color": "rgb(111,120,126)" }}>{stock?.[`newsDate${id}`].slice(0, 7)}</span>

                                <div className={"news-headline"}>{stock?.[`newsArticle${id}`].slice(0, 50)}...</div>

                                <div className={"news-link"}>{stock?.[`newsLink${id}`].slice(0, 66)} ...</div>
                            </div>
                        )
                    })}
                </div>


            </div>
            <div id="buy-panel">
                <div id="buy-1">Buy {ticker}
                </div>

                <div id="buy-2"></div>

                <div id="buy-3">
                    <button id='buy'>Buy 1</button>
                    <br></br>
                    <button id='sell'>Sell 1</button>
                </div>

                <div id="buy-4">
                    ${user.cash_balance} buying power available
                </div>

            </div>
        </div>
    )
}

