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

    useEffect(() => {
        (async () => {
            await dispatch(getSingleStock(ticker))
        })();
    }, [dispatch])


    return (
        <>
            <div>{stock?.ticker}</div>
            <div>{stock?.shortName}</div>
            <div>{stock?.currentPrice}</div>
            <div>{stock?.percentText}</div>
            <h3>About</h3>
            <div>
                {stock?.companyDescription.slice(0, 141)} Read More
            </div>
            <div className={"about"}>
                <div><p>Top Holder</p><span>{stock?.holder0}</span></div>
                <div><p>Headquarters</p><span>{stock?.companyAdress}</span></div>
                <div><p>YTD Price</p><span>{stock?.percentTextYear}</span></div>
                <div><p>Analyst Score</p><span>{stock?.tradeWords}</span></div>
            </div>
            <h3>Key Statistics</h3>
            <div className={"key-statistics"}>
                <div><p>Market Cap</p><span>{stock?.marketCap}</span></div>
                <div><p>Price-Earnings Ratio</p><span>38.94</span></div>
                <div><p>Dividend Yield</p><span>0.77</span></div>
                <div><p>Average Volume</p><span>27.24M</span></div>
            </div>
            <h3>News</h3>
            <div></div>

        </>
    )
}

